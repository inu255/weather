import { createEvent, createStore } from "effector";

type Location = {
  cityName: string;
  lat: number;
  lon: number;
  isLoading: boolean;
  isError: boolean;
};

export const $setMainTemperature = createEvent<number>();

export const $store = createStore<Location>({
  cityName: "",
  lat: 0,
  lon: 0,
  isLoading: false,
  isError: false,
});
// .on(getLocationName.doneData, (state, value) => ({
//   ...state,

// }));
