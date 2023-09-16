import { BiLoaderCircle } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

export function Loader() {
  return (
    <StyledLoader>
      <BiLoaderCircle />
    </StyledLoader>
  );
}

const rotate = keyframes`
  from {
    transform: translate(-50%, 50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, 50%) rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${rotate} 1.7s linear infinite;

  svg {
    font-size: 50px;
  }
`;
