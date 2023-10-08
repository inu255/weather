import { createEffect } from "effector";

export const searchCity = createEffect(
  async ({ searchString }: SearchCityParams): Promise<Response> => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchString}&count=10&language=en&format=json`;
    const options = {
      method: "GET",
    };
    const res = await fetch(url, options);
    return res.json();
  }
);

export interface SearchCityParams {
  searchString: string;
}
