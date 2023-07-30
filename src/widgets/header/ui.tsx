import styled from "styled-components";
import { BiMenuAltLeft } from "react-icons/bi";
export function Header() {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <BiMenuAltLeft style={{ fontSize: 30 }} />
      </MenuWrapper>
      <Heading>Novosibirsk</Heading>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  grid-area: header;
  height: 60px;
  padding: 22px;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
`;
