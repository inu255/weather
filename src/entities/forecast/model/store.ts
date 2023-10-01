import { createEvent, createStore } from "effector";
// TODO: пришлось импортировать фичу в сущности, потому что в открытом api
// данные для сегодняшней погоды (сущность) и прогноза (сущность) приходят вместе
// придумать, как сделать dependency injection
import { getFullWeatherData } from "src/features/get-weather";

export type DayForecast = {
  weatherCode: number;
  temperature: number;
  date: string;
  key: string;
};

type Weather = {
  forecast: DayForecast[];
};

export const $setMainTemperature = createEvent<number>();

export const $store = createStore<Weather>({
  forecast: [],
}).on(getFullWeatherData.doneData, (state, value) => ({
  ...state,
  forecast: value.daily.time.map((item, index) => ({
    date: item,
    temperature: Math.round(
      (value.daily.temperature_2m_min[index] + value.daily.temperature_2m_min[index]) / 2
    ),
    weatherCode: value.daily.weathercode[index],
    key: index.toString(),
  })),
}));
