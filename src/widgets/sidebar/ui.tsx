import { Locations } from "src/entities/locations";
import styled from "styled-components";
import { $store, triggerSidebar } from "./model";
import { useStore } from "effector-react";
import { BiMenuAltLeft } from "react-icons/bi";

export function Sidebar() {
  const showSidebar = useStore($store);

  const hideSidebar = () => {
    triggerSidebar(false);
  };

  return (
    <Wrapper className={showSidebar === true ? "shown" : "hidden"}>
      <HideIcon>
        <BiMenuAltLeft onClick={() => triggerSidebar(!showSidebar)} />
      </HideIcon>
      <Locations hideSidebar={hideSidebar} />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  grid-area: sidebar;
  z-index: 999;

  @media screen and (max-width: 420px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  &.shown {
    display: inherit;
  }

  &.hidden {
    display: none;
  }
`;

const HideIcon = styled.div`
  margin-left: auto;
  height: 60px;
  padding: 22px;
  display: grid;
  place-items: center;

  @media screen and (min-width: 420px) {
    display: none;
  }

  svg {
    font-size: 30px;
    transform: scaleX(-1);
  }
`;
