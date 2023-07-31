import { useStore } from "effector-react";
import styled from "styled-components";
import { $store } from "../model/store";

type Props = {};

export default function MainData({}: Props) {
  const weather = useStore($store);
  console.log(weather);

  return (
    <div>
      <Description>Солнечно</Description>
      <Temperature>{weather.mainTemperature.toString()}°</Temperature>
    </div>
  );
}

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
