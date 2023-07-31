import { createEvent, createStore } from "effector";
import { getFullWeatherData } from "../api";

type Weather = {
  mainTemperature: number;
};

export const $setMainTemperature = createEvent<number>();

export const $store = createStore<Weather>({
  mainTemperature: 31,
}).on(getFullWeatherData.doneData, (state, value) => ({
  ...state,
  mainTemperature: value.locations.Novosibirsk.currentConditions.temp,
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
