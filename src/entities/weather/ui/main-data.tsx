import { useStore } from "effector-react";
import styled from "styled-components";
import { $store } from "../model";

export function MainData() {
  const { mainTemperature, code, feelsLike } = useStore($store);

  return (
    <div>
      <Description>{code} code</Description>
      <Temperature>{mainTemperature.toString()}°</Temperature>
      <Summary>
        <h3>Daily Summary</h3>

        <div>
          Now it feels like {feelsLike.total}°, actually {mainTemperature}°.
          <br />
          Today the temperature is felt in the range from {feelsLike.min}° to {feelsLike.max}°
        </div>
      </Summary>
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

const Summary = styled.div`
  margin-top: 24px;

  h3 {
    margin-top: 0;
    font-weight: 600;
    font-size: 20px;
  }
`;
