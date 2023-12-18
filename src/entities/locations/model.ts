import { createEvent, createStore } from "effector";
import { searchLocation } from "./api";
import { Coordinates } from "src/shared/model/types";

export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  region: string;
}

interface CitiesStateType {
  showResults: boolean;
  locations: Location[];
  selectedLocation: SelectedData;
}

export interface SelectedData extends Coordinates {
  name: string;
  extraInfo?: string;
}

export const setShowResults = createEvent<boolean>();
export const selectLocation = createEvent<SelectedData>();
export const clearLocations = createEvent();

export const $store = createStore<CitiesStateType>({
  showResults: false,
  locations: [],
  selectedLocation: { latitude: 0, longitude: 0, name: "--", extraInfo: "" },
})
  .on(selectLocation, (state, value) => ({
    ...state,
    selectedLocation: {
      latitude: value.latitude,
      longitude: value.longitude,
      name: value.name,
      extraInfo: value.extraInfo,
    },
  }))
  .on(setShowResults, (state, value) => ({
    ...state,
    showResults: value,
  }))
  .on(searchLocation.doneData, (state, value) => ({
    ...state,
    // showResults: value.results?.length > 0 ? true : false,
    showResults: true,
    locations: value.results?.map((item) => ({
      id: item.id.toString(),
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
      country: item.country,
      region: item.admin1,
    })),
  }))
  .on(clearLocations, (state) => ({
    ...state,
    locations: [],
    showResults: false,
  }));
