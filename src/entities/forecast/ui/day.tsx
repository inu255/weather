import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import dayjs from "dayjs";
import { DayForecast } from "../model";

type Props = { data: DayForecast } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Day({ data }: Props) {
  return (
    <StyledDay>
      {data.temperature}°
      <WiDayCloudy />
      <StyledDate>{dayjs(data.date).format("D MM")}</StyledDate>
    </StyledDay>
  );
}

const StyledDay = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  padding: 16px 15.5px;

  svg {
    font-size: 30px;
  }
`;

const StyledDate = styled.div`
  font-size: 12px;
  white-space: nowrap;
`;
