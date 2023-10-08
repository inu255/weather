// import { createEvent, createStore } from "effector";
// import { getFullWeatherData } from "src/features/get-weather";

// type CitiesStateType = {
//   showResults: boolean;
// };

// export const $setShowResults = createEvent<boolean>();

// export const $store = createStore<CitiesStateType>({
//   forecast: [],
// }).on(getFullWeatherData.doneData, (state, value) => ({
//   ...state,
//   forecast: value.daily.time.map((item, index) => ({
//     date: item,
//     temperature: Math.round(
//       (value.daily.temperature_2m_min[index] + value.daily.temperature_2m_min[index]) / 2
//     ),
//     weatherCode: value.daily.weathercode[index],
//     key: index.toString(),
//   })),
// }));
