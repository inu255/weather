import { createEvent, createStore } from "effector";
import { DayForecast } from "src/entities/forecast";
import { FeelsLike } from "src/entities/temperature";
import { getFullWeatherData } from "src/features/get-weather";

type Weather = {
  mainTemperature: number;
  weatherCode: number;
  feelsLike: FeelsLike;
  windSpeed: number;
  humidity: number;
  visibility: number;
  forecast: DayForecast[];
};

export const $setMainTemperature = createEvent<number>();

export const $store = createStore<Weather>({
  mainTemperature: 0,
  weatherCode: 0,
  feelsLike: {
    min: 0,
    max: 0,
    total: 0,
  },
  windSpeed: 0,
  humidity: 0,
  visibility: 0,
  forecast: [],
}).on(getFullWeatherData.doneData, (state, value) => ({
  ...state,
  mainTemperature: Math.round(value.current_weather.temperature),
  weatherCode: value.current_weather.weathercode,
  feelsLike: {
    min: Math.round(value.daily.apparent_temperature_min[0]),
    max: Math.round(value.daily.apparent_temperature_max[0]),
    total: Math.round(value.hourly.apparent_temperature[0]),
  },
  windSpeed: Math.round(value.hourly.windspeed_10m[0]),
  humidity: Math.round(value.hourly.relativehumidity_2m[0]),
  visibility: Math.round(value.hourly.visibility[0] / 1000),
  forecast: value.daily.time.map((item, index) => ({
    date: item,
    temperature: Math.round(
      (value.daily.temperature_2m_min[index] + value.daily.temperature_2m_min[index]) / 2
    ),
    weatherCode: value.daily.weathercode[index],
    key: index.toString(),
  })),
}));
