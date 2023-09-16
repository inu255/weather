import { Cities } from "src/entities/cities";
import styled from "styled-components";

export function Sidebar() {
  return (
    <Wrapper>
      <Cities />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  grid-area: sidebar;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
