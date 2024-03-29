import styled from "styled-components";
import { createSecondaryData } from "./lib";

type Props = { windSpeed: number; humidity: number; visibility: number };

export const AtmosphericParameters = ({ windSpeed, humidity, visibility }: Props) => {
  return (
    <Wrapper>
      {createSecondaryData(windSpeed, humidity, visibility).map((item) => (
        <ParameterItem key={item.key}>
          {item.icon}
          <h4>
            {item.value} {item.unit}
          </h4>
          <WeatherCodeDescription>{item.name}</WeatherCodeDescription>
        </ParameterItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 24px 48px 0 48px;
  background-color: ${({ theme }) => theme.colors.text};
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 361px) {
    margin-left: 24px;
    margin-right: 24px;
  }

  @media screen and (max-width: 1025px) and (min-width: 420px) {
    width: fit-content;
    gap: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  * {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg,
  svg > * {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 37px;
  }
`;

const ParameterItem = styled.div`
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
