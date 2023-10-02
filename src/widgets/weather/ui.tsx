import { useStore } from "effector-react";
import { useEffect } from "react";
import { Date } from "src/entities/date";
import { Forecast } from "src/entities/forecast";
import { MainData, SecondaryData } from "src/entities/weather-today";
import { getFullWeatherData } from "src/features/get-weather/api";
import { Loader } from "src/shared/ui/loader";
import styled from "styled-components";
import { $store as getLocationStore } from "src/features/get-location";

export function Weather() {
  const loadingQuery = useStore(getFullWeatherData.pending);
  const {
    latitude,
    longitude,
    isLoading: isLoadingGetLocation,
    isError,
  } = useStore(getLocationStore);

  useEffect(() => {
    (async () => {
      await getFullWeatherData({ latitude, longitude });
    })();
  }, [latitude, longitude]);

  if (loadingQuery || isLoadingGetLocation) {
    return <Loader />;
  } else if (isError) {
    return "err";
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
