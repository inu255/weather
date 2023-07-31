const API_KEY = import.meta.env.VITE_API_KEY;
import { createEffect } from "effector";

export interface ResponseType {
  columns: { [key: string]: Column };
  remainingCost: number;
  queryCost: number;
  messages: null;
  locations: Locations;
}

export interface Column {
  id: string;
  name: string;
  type: number;
  unit: null | string;
}

export interface Locations {
  Novosibirsk: Novosibirsk; // TODO: city
}

export interface Novosibirsk {
  stationContributions: null;
  values: Value[];
  id: string;
  address: string;
  name: string;
  index: number;
  latitude: number;
  longitude: number;
  distance: number;
  time: number;
  tz: string;
  currentConditions: CurrentConditions;
  alerts: null;
}

export interface CurrentConditions {
  wdir: number;
  temp: number;
  sunrise: Date;
  visibility: number;
  wspd: number;
  icon: string;
  stations: string;
  heatindex: null;
  cloudcover: number;
  datetime: Date;
  precip: null;
  moonphase: number;
  snowdepth: null;
  sealevelpressure: number;
  dew: number;
  sunset: Date;
  humidity: number;
  wgust: null;
  windchill: null;
}

export interface Value {
  wdir: number;
  uvindex: number;
  datetimeStr: Date;
  preciptype: string;
  cin: number;
  cloudcover: number;
  pop: number;
  mint: number;
  datetime: number;
  precip: number;
  solarradiation: number;
  dew: number;
  humidity: number;
  temp: number;
  maxt: number;
  visibility: number;
  wspd: number;
  severerisk: number;
  solarenergy: number;
  heatindex: number | null;
  snowdepth: number;
  sealevelpressure: number;
  snow: number;
  wgust: number;
  conditions: Conditions;
  windchill: number | null;
  cape: number;
}

export enum Conditions {
  Clear = "Clear",
  Overcast = "Overcast",
  PartiallyCloudy = "Partially cloudy",
}

export const getFullWeatherData = createEffect(async (): Promise<ResponseType> => {
  const url =
    "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Novosibirsk&contentType=json&unitGroup=metric&shortColumnNames=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  return res.json();
});
