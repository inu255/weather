import { useDebounce } from "@uidotdev/usehooks";
import { useStore } from "effector-react";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchInput } from "src/shared/ui/search-input";
import styled from "styled-components";
import { searchLocation } from "../api";
import { $store, clearLocations, setShowResults } from "../model";
import { SearchResults } from "./search-results";
import { Loader } from "src/shared/ui/loader";
import { SavedLocations } from "./saved-locations";

type Props = {
  hideSidebar: () => void;
};

export const Locations = ({ hideSidebar }: Props) => {
  const { showResults } = useStore($store);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const searchLocationWithDebounce = async () => {
      setIsLoading(true);
      if (debouncedSearch) {
        await searchLocation({ searchString: debouncedSearch });
      }

      setIsLoading(false);
    };

    searchLocationWithDebounce();
  }, [debouncedSearch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleClear = () => {
    setSearch("");
    setShowResults(false);
  };

  const hideSidebarAndClearSearchString = () => {
    hideSidebar();
    setSearch("");
    clearLocations();
  };

  return (
    <Wrapper>
      <SearchInput
        value={search}
        onChange={handleSearch}
        placeholder="Type city name"
        onClear={handleClear}
      />
      {isLoading === true && showResults === false ? (
        <CenteredLoader>
          <Loader />
        </CenteredLoader>
      ) : (
        <></>
      )}
      {isLoading === false && showResults === true ? (
        <SearchResults hideSidebar={hideSidebarAndClearSearchString} />
      ) : (
        <SavedLocations />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 100vh; */
  padding: 22px;
  padding-top: 28px;
  padding-bottom: 0;

  /* @media screen and (min-width: 420px) {
    padding-bottom: 0;
  } */

  @media screen and (max-width: 420px) {
    padding-top: 0;
  }
`;

const CenteredLoader = styled.div`
  position: relative;
  height: 200px;
`;
