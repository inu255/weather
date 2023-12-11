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
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    font-size: 50px;
    animation: ${rotate} 1.7s linear infinite;
  }
`;
