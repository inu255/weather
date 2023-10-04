import styled from "styled-components";
import { BiMenuAltLeft } from "react-icons/bi";
import { useEffect } from "react";
import { getCurrentPosition } from "src/features/get-location";

export function Header() {
  useEffect(() => {
    (async () => {
      await getCurrentPosition();
    })();
  }, []);

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <BiMenuAltLeft style={{ fontSize: 30 }} />
      </MenuWrapper>
      <Heading>Your Location</Heading>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  grid-area: header;
  height: 60px;
  padding: 22px;
  position: relative;

  @media screen and (max-width: 361px) {
    padding: 22px 12px;
  }
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
  left: 32px;
  transform: translateY(-50%);

  @media screen and (max-width: 361px) {
    left: 20px;
  }
`;
