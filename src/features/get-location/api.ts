import { createEffect } from "effector";

export const getLocationDataByIp = createEffect(async (): Promise<Response> => {
  //   const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=auto`;
  const url = `http://ip-api.com/json/?lang=ru`;
  const options = {
    method: "GET",
  };
  const res = await fetch(url, options);
  return res.json();
});
