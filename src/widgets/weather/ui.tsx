import { useStore } from "effector-react";
import { useEffect } from "react";
import { AtmosphericParameters } from "src/entities/atmospheric-parameters";
import { Date } from "src/entities/date";
import { Forecast } from "src/entities/forecast";
import { $store as locationStore } from "src/entities/locations";
import { Temperature } from "src/entities/temperature";
import { $store as getLocationStore } from "src/features/get-current-location";
import { getFullWeatherData } from "src/features/get-weather/api";
import { Loader } from "src/shared/ui/loader";
import styled from "styled-components";
import { $store as weatherModel } from "./model";

// TODO: перенести потом это в pages/home
export const Weather = () => {
  const loadingQuery = useStore(getFullWeatherData.pending);
  const {
    latitude: detectedLatitude,
    longitude: detectedLongitude,
    isLoading: isLoadingGetLocation,
    isError,
  } = useStore(getLocationStore);

  const { mainTemperature, weatherCode, feelsLike, windSpeed, humidity, visibility, forecast } =
    useStore(weatherModel);

  const {
    selectedLocation: { latitude: selectedLatitude, longitude: selectedLongitude },
  } = useStore(locationStore);

  useEffect(() => {
    (async () => {
      await getFullWeatherData({ latitude: detectedLatitude, longitude: detectedLongitude });
    })();
  }, [detectedLatitude, detectedLongitude]);

  useEffect(() => {
    (async () => {
      await getFullWeatherData({ latitude: selectedLatitude, longitude: selectedLongitude });
    })();
  }, [selectedLatitude, selectedLongitude]);

  if (loadingQuery || isLoadingGetLocation) {
    return (
      <CenteredLoader>
        <Loader />
      </CenteredLoader>
    );
  } else if (isError) {
    return (
      <Error>
        <div>Unexpected Error</div>
      </Error>
    );
  } else {
    return (
      <div>
        <Date />
        <Temperature
          feelsLike={feelsLike}
          mainTemperature={mainTemperature}
          weatherCode={weatherCode}
        />
        <Responsive>
          <AtmosphericParameters
            humidity={humidity}
            visibility={visibility}
            windSpeed={windSpeed}
          />
          <Forecast forecast={forecast} />
        </Responsive>
      </div>
    );
  }
};

const Responsive = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 4fr;

  /* @media screen and (max-width: 420px) {
    display: block;
  } */

  @media screen and (max-width: 1025px) {
    display: block;
  }
`;

const Error = styled.div`
  display: grid;
  margin-top: 50px;

  div {
    place-self: center;
  }
`;

const CenteredLoader = styled.div`
  position: relative;
  height: 80vh;
`;
