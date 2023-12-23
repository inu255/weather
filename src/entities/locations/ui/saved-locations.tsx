import { useLocalStorage } from "@uidotdev/usehooks";
import styled from "styled-components";
import { SelectedData, selectLocation } from "../model";
import { ListItem } from "src/shared/ui/list-item";
import { Heading } from "src/shared/ui/heading";

export const SavedLocations = () => {
  const [savedLocations] = useLocalStorage<SelectedData[]>("savedLocations", []);

  if (savedLocations.length > 0) {
    return (
      <div style={{ height: "auto" }}>
        <Heading style={{ marginTop: 16 }}>Saved locations</Heading>
        <Wrapper>
          {savedLocations.reverse().map((item, index) => (
            <LocationItem key={index} onClick={() => selectLocation(item)}>
              <ListItem
                primaryText={item.name}
                secondaryText={item.extraInfo ? item.extraInfo : ""}
              />
            </LocationItem>
          ))}
        </Wrapper>
      </div>
    );
  } else {
    return <></>;
  }
};

const Wrapper = styled.div`
  max-height: calc(100vh - 152px);
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 420px) {
    max-height: calc(100vh - 226px);
  }
`;

const LocationItem = styled.div`
  padding: 11px 22px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;
