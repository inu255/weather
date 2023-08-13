import { createEvent, createStore } from "effector";
import { getFullWeatherDataNewApi } from "../api";

type Weather = {
  mainTemperature: number;
  code: number;
  feelsLike: {
    min: number;
    max: number;
    total: number;
  };
  windSpeed: number;
  humidity: number;
  visibility: number;
};

export const $setMainTemperature = createEvent<number>();

export const $store = createStore<Weather>({
  mainTemperature: 0,
  code: 0,
  feelsLike: {
    min: 0,
    max: 0,
    total: 0,
  },
  windSpeed: 0,
  humidity: 0,
  visibility: 0,
})
  // .on(getFullWeatherData.doneData, (state, value) => ({
  //   ...state,
  //   mainTemperature: value.locations.Novosibirsk.currentConditions.temp,
  // }))
  .on(getFullWeatherDataNewApi.doneData, (state, value) => ({
    ...state,
    mainTemperature: Math.round(value.current_weather.temperature),
    code: value.current_weather.weathercode,
    feelsLike: {
      min: Math.round(value.daily.apparent_temperature_min[0]),
      max: Math.round(value.daily.apparent_temperature_max[0]),
      total: Math.round(value.hourly.apparent_temperature[0]),
    },
    windSpeed: Math.round(value.hourly.windspeed_10m[0]),
    humidity: Math.round(value.hourly.relativehumidity_2m[0]),
    visibility: Math.round(value.hourly.visibility[0] / 1000),
  }));
// .on (setNewTodo, (state, newTodo) => ({
// ...state,
// newTodo,
// }))
// .on(addTodo, (state) => ({
// ...state,
// newTodo: "",
// todos: addTodoToList(state.todos, state.newTodo),
// }));
