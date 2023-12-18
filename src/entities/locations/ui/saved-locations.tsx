import { useLocalStorage } from "@uidotdev/usehooks";
import styled from "styled-components";
import { SelectedData } from "../model";
import { ListItem } from "src/shared/ui/list-item";
import { Heading } from "src/shared/ui/heading";

export const SavedLocations = () => {
  const [savedLocations] = useLocalStorage<SelectedData[]>("savedLocations", []);

  if (savedLocations.length > 0) {
    return (
      <div>
        <Heading style={{ marginTop: 16 }}>Saved locations</Heading>
        {savedLocations.reverse().map((item) => (
          <LocationItem>
            <ListItem
              primaryText={item.name}
              secondaryText={item.extraInfo ? item.extraInfo : ""}
            />
          </LocationItem>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

const LocationItem = styled.div`
  padding: 11px 22px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;
