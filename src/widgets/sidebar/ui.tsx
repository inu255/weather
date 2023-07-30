import styled from "styled-components";

export function Sidebar() {
  return <Wrapper>Sidebar</Wrapper>;
}

const Wrapper = styled.aside`
  grid-area: sidebar;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
