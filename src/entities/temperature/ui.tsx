import { decodeWeatherCode } from "src/shared/lib";
import { Heading } from "src/shared/ui/heading";
import styled from "styled-components";
import { FeelsLike } from "./model";

type Props = { mainTemperature: number; weatherCode: number; feelsLike: FeelsLike };

export const Temperature = ({ mainTemperature, weatherCode, feelsLike }: Props) => {
  return (
    <Wrapper>
      <Description>{decodeWeatherCode(weatherCode).name}</Description>
      <StyledTemperature>{mainTemperature.toString()}°</StyledTemperature>
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
};

const Wrapper = styled.div`
  padding: 0 48px;

  @media screen and (min-width: 420px) {
    br {
      display: none;
    }
  }

  @media screen and (max-width: 361px) {
    padding: 0 24px;
  }
`;

const Description = styled.div`
  text-align: center;
  margin-top: 22px;
  font-size: 18px;
`;

const StyledTemperature = styled.div`
  text-align: center;
  margin-top: 0px;
  font-weight: 400;
  font-size: 180px;
`;

const SummaryDescription = styled.div`
  /* margin-top: 24px; */
  margin-top: -10px;
`;
