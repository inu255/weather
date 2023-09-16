import { createEffect } from "effector";

export interface Response {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  apparent_temperature: string;
  visibility: string;
  windspeed_10m: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  apparent_temperature: number[];
  visibility: number[];
  windspeed_10m: number[];
}

export interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  apparent_temperature_max: string;
  apparent_temperature_min: string;
}

export interface Daily {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
}

export const getFullWeatherDataNewApi = createEffect(async (): Promise<Response> => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=55.0415&longitude=82.9346&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=auto";
  const options = {
    method: "GET",
  };
  const res = await fetch(url, options);
  return res.json();
});

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos: any) {
//   const crd = pos.coords;
//   console.log(crd);
// }

// function error(err: any) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);
