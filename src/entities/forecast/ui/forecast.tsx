import { useStore } from "effector-react";
import { Heading } from "src/shared/ui/heading";
import styled from "styled-components";
import { Day } from "./day";
import { $store } from "../model";

export function Forecast() {
  const { forecast } = useStore($store);

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
}

const Wrapper = styled.div`
  @media screen and (max-width: 420px) {
    width: 100vw;
    margin-top: 35px;
    margin-bottom: 24px;
  }
`;

const ForecastHeading = styled.div`
  width: calc(100% - 96px);
  margin: 0 48px;
`;

const Carousel = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
  /* width: 100%; */
  padding: 0 48px;
  margin-top: -10px;
  width: 300px;

  @media screen and (max-width: 420px) {
    width: calc(100vw - 96px);
    overflow-x: scroll;
    scrollbar-width: none;
  }
`;
