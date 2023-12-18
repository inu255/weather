import { useStore } from "effector-react";
import styled from "styled-components";
import { $store, SelectedData, selectLocation } from "../model";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ListItem } from "src/shared/ui/list-item";

type Props = {
  hideSidebar: () => void;
};

export const SearchResults = ({ hideSidebar }: Props) => {
  const { locations } = useStore($store);
  const [savedLocations, saveLocations] = useLocalStorage<SelectedData[]>("savedLocations", []);

  const handleLocationChange = (location: SelectedData) => {
    selectLocation(location);
    hideSidebar();
    const isSelectedLocationSaved = savedLocations.some(
      (item) =>
        item.latitude === location.latitude &&
        item.longitude === location.longitude &&
        item.name === location.name
    );
    if (isSelectedLocationSaved === false) {
      saveLocations([...savedLocations, location]);
    }
  };

  return (
    <Wrapper>
      {locations === undefined ? "Location Doesn't Exist" : <></>}
      {locations?.map((item) => (
        <LocationItem
          key={item.id}
          onClick={() =>
            handleLocationChange({
              latitude: item.latitude,
              longitude: item.longitude,
              name: item.name,
              extraInfo: `${item.country}${item.region ? `, ${item.region}` : ""}`,
            })
          }
        >
          <ListItem
            primaryText={item.name}
            secondaryText={`${item.country}${item.region ? `, ${item.region}` : ""}`}
          />
        </LocationItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 11px 22px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
`;

const LocationItem = styled.div`
  padding: 11px 0;
`;
