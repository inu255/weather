import { useStore } from "effector-react";
import { useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { $store, selectLocation } from "src/entities/locations";
import { setCoordinates } from "src/features/get-current-location";
import { getLocationDataByIp } from "src/features/get-current-location/api";
import styled from "styled-components";

type Props = {
  sidebarShown: boolean;
  triggerSidebar: () => void;
};

export function Header({ sidebarShown, triggerSidebar }: Props) {
  const { selectedLocation } = useStore($store);

  useEffect(() => {
    (async () => {
      // await getCurrentPositionWithPermission();
      await getLocationDataByIp().then((res) => {
        setCoordinates({ latitude: res.latitude, longitude: res.longitude });
        selectLocation({ latitude: res.latitude, longitude: res.longitude, name: res.city });
      });
    })();
  }, []);

  return (
    <HeaderWrapper className={sidebarShown ? "hide" : "show"}>
      <MenuWrapper onClick={() => triggerSidebar()}>
        <BiMenuAltLeft />
      </MenuWrapper>
      <Heading>{selectedLocation.name}</Heading>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  grid-area: header;
  height: 60px;
  padding: 22px 48px;
  /* position: relative; */
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows: 1fr;

  @media screen and (max-width: 361px) {
    padding: 22px 24px;
  }

  &.show {
    @media screen and (max-width: 420px) {
      display: inherit;
    }
  }

  &.hide {
    @media screen and (max-width: 420px) {
      display: none;
    }
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  margin: 0;
  text-align: center;
  display: grid;
  place-items: center;
  margin-left: -30px;
`;

const MenuWrapper = styled.div`
  display: grid;
  place-items: center;
  z-index: 998;

  svg {
    font-size: 30px;
  }

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 361px) {
    /* left: 20px; */
  }
`;
