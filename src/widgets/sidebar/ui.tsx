import { Cities } from "src/entities/cities";
import styled from "styled-components";
import { $store } from "./model";
import { useStore } from "effector-react";

export function Sidebar() {
  const showSidebar = useStore($store);

  if (showSidebar === true) {
    return (
      <Wrapper>
        <Cities />
      </Wrapper>
    );
  } else {
    return <></>;
  }
}

const Wrapper = styled.aside`
  grid-area: sidebar;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
