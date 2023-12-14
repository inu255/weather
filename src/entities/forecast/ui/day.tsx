import styled from "styled-components";

import dayjs from "dayjs";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { decodeWeatherIcon } from "src/shared/lib";
import { DayForecast } from "../model";

type Props = { data: DayForecast } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Day({ data }: Props) {
  return (
    <StyledDay>
      <div>{data.temperature}°</div>
      {decodeWeatherIcon(data.weatherCode)}
      <StyledDate>{dayjs(data.date).format("DD.MM")}</StyledDate>
    </StyledDay>
  );
}

const StyledDay = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  padding: 16px 15.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 420px) {
    justify-content: space-between;
    height: auto;
    font-size: 20px;
    padding: 24px 15.5px;
    gap: 5.5px;
  }

  svg {
    font-size: 30px;
  }
`;

const StyledDate = styled.div`
  font-size: 12px;
  white-space: nowrap;

  @media screen and (min-width: 420px) {
    font-size: 20px;
  }
`;
