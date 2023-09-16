import styled from "styled-components";
import { useStore } from "effector-react";
import { $store } from "../../model";
import { createSecondaryData } from "./data";

export function SecondaryData() {
  const { windSpeed, humidity, visibility } = useStore($store);

  return (
    <SecondaryWrapper>
      {createSecondaryData(windSpeed, humidity, visibility).map((item) => (
        <SecondaryItem key={item.key}>
          {item.icon}
          <h4>
            {item.value} {item.unit}
          </h4>
          <WeatherCodeDescription>{item.name}</WeatherCodeDescription>
        </SecondaryItem>
      ))}
    </SecondaryWrapper>
  );
}

const SecondaryWrapper = styled.div`
  margin: 24px 48px 0 48px;
  background-color: ${({ theme }) => theme.colors.text};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;

  * {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg,
  svg > * {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 37px;
  }
`;

const SecondaryItem = styled.div`
  text-align: center;

  h4 {
    margin: 12px 0 6px;
    font-size: 18px;
  }
`;

const WeatherCodeDescription = styled.div`
  font-weight: 300;
  font-size: 12px;
`;
