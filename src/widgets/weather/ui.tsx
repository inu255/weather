import { useStore } from "effector-react";
import { useEffect } from "react";
import { Date } from "src/entities/date";
import { Forecast } from "src/entities/forecast";
import { MainData, SecondaryData } from "src/entities/weather-today";
import { getFullWeatherData } from "src/features/get-weather/api";
import { Loader } from "src/shared/ui/loader";
import styled from "styled-components";
import { $store as getLocationStore } from "src/features/get-current-location";
import { $store } from "src/entities/locations";

export function Weather() {
  const loadingQuery = useStore(getFullWeatherData.pending);
  const {
    latitude: detectedLatitude,
    longitude: detectedLongitude,
    isLoading: isLoadingGetLocation,
    isError,
  } = useStore(getLocationStore);

  const {
    selectedLocation: { latitude: selectedLatitude, longitude: selectedLongitude },
  } = useStore($store);

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
    return <Loader />;
  } else if (isError) {
    return (
      <Error>
        <div>Unexpected Error</div>
        <div>Try to enable Geolocation Service</div>
        {/* TODO: включите жпс или типа того */}
      </Error>
    );
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

const Error = styled.div`
  display: grid;
  margin-top: 50px;

  div {
    place-self: center;
  }
`;
