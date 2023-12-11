import { useDebounce } from "@uidotdev/usehooks";
import { useStore } from "effector-react";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchInput } from "src/shared/ui/search-input";
import styled from "styled-components";
import { searchLocation } from "../api";
import { $store, setShowResults } from "../model";
import { SearchResults } from "./search-results";
import { Loader } from "src/shared/ui/loader";

type Props = {
  hideSidebar: () => void;
};

export function Locations({ hideSidebar }: Props) {
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
      {showResults === true ? <SearchResults hideSidebar={hideSidebar} /> : <></>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 22px;
  padding-top: 28px;
  @media screen and (max-width: 420px) {
    padding-top: 0;
  }
`;

const CenteredLoader = styled.div`
  position: relative;
  height: 200px;
`;
