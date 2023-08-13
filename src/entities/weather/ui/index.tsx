import { MainData } from "./main-data";
import { useEffect } from "react";
import { getFullWeatherDataNewApi } from "../api";
import { SecondaryData } from "./secondary-data";
import { useStore } from "effector-react";
import { BiLoaderCircle } from "react-icons/bi";
import styled, { keyframes } from "styled-components";
import { Forecast } from "./forecast";

export function Weather() {
  const loading = useStore(getFullWeatherDataNewApi.pending);

  useEffect(() => {
    (async () => {
      await getFullWeatherDataNewApi();
    })();
  }, []);

  if (loading) {
    return (
      <Loader>
        <BiLoaderCircle />
      </Loader>
    );
  } else {
    return (
      <div>
        <MainData />
        <SecondaryData />
        <Forecast />
      </div>
    );
  }
}

const rotate = keyframes`
  from {
    transform: translate(-50%, 50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, 50%) rotate(360deg);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${rotate} 1.7s linear infinite;

  svg {
    font-size: 50px;
  }
`;
