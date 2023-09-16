import { useStore } from "effector-react";
import { useEffect } from "react";
import { Date } from "src/entities/date";
import { Forecast } from "src/entities/forecast";
import { MainData, SecondaryData } from "src/entities/weather-today";
import { getFullWeatherDataNewApi } from "src/features/get-weather/api";
import { Loader } from "src/shared/ui/loader";
import styled from "styled-components";

export function Weather() {
  const loading = useStore(getFullWeatherDataNewApi.pending);

  useEffect(() => {
    (async () => {
      await getFullWeatherDataNewApi();
    })();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Date />
        <MainData />
        <Responsive>
          <SecondaryData />
          <Forecast />
        </Responsive>
      </div>
    );
  }
}

const Responsive = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 4fr;

  @media screen and (max-width: 420px) {
    display: block;
  }
`;
