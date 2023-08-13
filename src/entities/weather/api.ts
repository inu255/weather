import { createEffect } from "effector";

// export const getFullWeatherData = createEffect(async (): Promise<ResponseType> => {
//   const url =
//     "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Novosibirsk&contentType=json&unitGroup=metric&shortColumnNames=0";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": API_KEY,
//       "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
//     },
//   };
//   const res = await fetch(url, options);
//   return res.json();
// });

export const getFullWeatherDataNewApi = createEffect(async (): Promise<any> => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=55.0415&longitude=82.9346&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=auto";
  const options = {
    method: "GET",
  };
  const res = await fetch(url, options);
  return res.json();
});
