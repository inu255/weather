import { createEffect } from "effector";

export const getLocationDataByIp = createEffect(async (): Promise<Response> => {
  const url = `https://ipapi.co/json`;
  const options = {
    method: "GET",
  };
  const res = await fetch(url, options);

  return res.json();
});
