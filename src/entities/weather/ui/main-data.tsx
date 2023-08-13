import { useStore } from "effector-react";
import styled from "styled-components";
import { $store } from "../model";
import { Heading } from "src/shared/ui/heading";

export function MainData() {
  const { mainTemperature, weatherCode, feelsLike } = useStore($store);

  return (
    <Wrapper>
      <Description>{weatherCode} code</Description>
      <Temperature>{mainTemperature.toString()}°</Temperature>
      <Summary>
        <Heading>Daily Summary</Heading>

        <div>
          Now it feels like {feelsLike.total}°, actually {mainTemperature}°.
          <br />
          Today the temperature is felt in the range from {feelsLike.min}° to {feelsLike.max}°
        </div>
      </Summary>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 48px;
`;

const Description = styled.div`
  text-align: center;
  margin-top: 22px;
`;

const Temperature = styled.div`
  text-align: center;
  margin-top: 35px;
  font-weight: 400;
  font-size: 180px;
`;

const Summary = styled.div`
  margin-top: 24px;
`;
