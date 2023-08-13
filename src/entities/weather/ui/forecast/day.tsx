import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";

import { DayForecast } from "../../model";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import dayjs from "dayjs";

type Props = { data: DayForecast } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Day({ data }: Props) {
  return (
    <StyledDay>
      {data.temperature}°
      <WiDayCloudy />
      {dayjs(data.date).format("D MMM")}
    </StyledDay>
  );
}

const StyledDay = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  padding: 20px 16px;

  svg {
    font-size: 30px;
  }
`;
