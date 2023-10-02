import { createEvent, createStore } from "effector";

type Location = {
  cityName: string;
  latitude: number;
  longitude: number;
  isLoading: boolean;
  isError: boolean;
};

export type LatAndLon = {
  latitude: number;
  longitude: number;
};

const success = (position: { coords: LatAndLon }) => {
  const coords = position.coords;
  setCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
};

export const getCurrentPosition = () => {
  navigator.geolocation.getCurrentPosition(success, () => setCoordinatesError(), {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });
};

export const setCoordinates = createEvent<LatAndLon>();
export const setCoordinatesError = createEvent();

export const $store = createStore<Location>({
  cityName: "",
  latitude: 0,
  longitude: 0,
  isLoading: true,
  isError: false,
})
  .on(setCoordinates, (state, value) => ({
    ...state,
    latitude: value.latitude,
    longitude: value.longitude,
    isLoading: false,
    isError: false,
  }))
  .on(setCoordinatesError, (state) => ({
    ...state,
    isLoading: false,
    isError: true,
  }));
