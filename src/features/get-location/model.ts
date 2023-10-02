import { createEvent, createStore } from "effector";

type Location = {
  cityName: string;
  lat: number;
  lon: number;
  isLoading: boolean;
  isError: boolean;
};

function success(pos: any) {
  const crd = pos.coords;
  console.log(crd);
  setCoordinates({ lat: crd.latitude, lon: crd.longitude });
}

// function error(err: any) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

export const getCurrentPosition = () => {
  navigator.geolocation.getCurrentPosition(success, () => {}, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });
};

export const setCoordinates = createEvent<LatAndLon>();


export type LatAndLon = {
  lat: number;
  lon: number;
};


export const $store = createStore<Location>({
  cityName: "",
  lat: 0,
  lon: 0,
  isLoading: false,
  isError: false,
})
  .on(setCoordinates, (state, value) => ({
    ...state,
    lat: value.lat,
    lon: value.lon,
  }));
