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
      <div>
        <Heading>Daily Summary</Heading>

        <SummaryDescription>
          Now it feels like {feelsLike.total}°, actually {mainTemperature}°.
          <br />
          Today the temperature is felt in the range from {feelsLike.min}° to {feelsLike.max}°
        </SummaryDescription>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 48px;
`;

const Description = styled.div`
  text-align: center;
  margin-top: 22px;
  font-size: 18px;
`;

const Temperature = styled.div`
  text-align: center;
  margin-top: 0px;
  font-weight: 400;
  font-size: 180px;
`;

const SummaryDescription = styled.div`
  /* margin-top: 24px; */
  margin-top: -10px;
`;
