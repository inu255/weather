import { useStore } from "effector-react";
import styled from "styled-components";
import { $store, SelectedData, selectLocation } from "../model";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {
  hideSidebar: () => void;
};

export function SearchResults({ hideSidebar }: Props) {
  const { locations } = useStore($store);
  const [savedLocations, saveLocations] = useLocalStorage<SelectedData[]>("savedLocations", []);
  const [_, saveActiveLocation] = useLocalStorage<SelectedData>("activeLocation", undefined);

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
    saveActiveLocation(location);
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
            })
          }
        >
          <div className="main-info">{item.name}</div>
          <div className="secondary-info">
            {item.country}, {item.region}
          </div>
        </LocationItem>
      ))}
    </Wrapper>
  );
}

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

  & > * {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    cursor: pointer;
  }

  .main-info {
    font-size: 16px;
  }

  .secondary-info {
    font-weight: 300;
    font-size: 12px;
  }
`;
