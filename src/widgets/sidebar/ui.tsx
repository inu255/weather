import { Cities } from "src/entities/cities";
import styled from "styled-components";
import { $store, triggerSidebar } from "./model";
import { useStore } from "effector-react";
import { BiMenuAltLeft } from "react-icons/bi";

export function Sidebar() {
  const showSidebar = useStore($store);

  if (showSidebar === true) {
    return (
      <Wrapper>
        <HideIcon>
          <BiMenuAltLeft onClick={() => triggerSidebar(!showSidebar)} />
        </HideIcon>
        <Cities />
      </Wrapper>
    );
  } else {
    return <></>;
  }
}

const Wrapper = styled.aside`
  grid-area: sidebar;
  z-index: 999;
  @media screen and (max-width: 420px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
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
