import { Heading } from "src/shared/ui/heading";
import styled from "styled-components";
import { DayForecast } from "../model";
import { Day } from "./day";

type Props = {
  forecast: DayForecast[];
};

export const Forecast = ({ forecast }: Props) => {
  return (
    <Wrapper>
      <ForecastHeading>
        <Heading>Weekly forecast</Heading>
      </ForecastHeading>
      <Carousel>
        {forecast.map((item) => (
          <Day data={item} key={item.key} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 420px) {
    margin-top: 24px;
  }

  @media screen and (max-width: 420px) {
    width: 100vw;
    margin-top: 35px;
    margin-bottom: 24px;
  }
`;

const ForecastHeading = styled.div`
  width: calc(100% - 96px);
  margin: 0 48px;
  margin-right: 48px; // !!!!!

  /* @media screen and (min-width: 420px) {
    display: none;
  } */

  @media screen and (max-width: 361px) {
    margin: 0 24px;
  }

  @media screen and (min-width: 420px) {
    display: none;
  }
`;

const Carousel = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
  /* width: 100%; */

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1025px) and (min-width: 420px) {
    margin-left: 48px;
    margin-right: 48px;
    margin-bottom: 48px;
  }

  @media screen and (max-width: 420px) {
    width: calc(100vw - 96px);
    overflow-x: scroll;
    scrollbar-width: none;
    margin-top: -10px;
    padding: 0 48px;
  }

  @media screen and (max-width: 361px) {
    width: calc(100vw - 48px);
    padding: 0 24px;
  }
`;
