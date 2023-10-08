import { createEffect } from "effector";

export const searchCity = createEffect(
  async ({ searchString }: SearchCityParams): Promise<SearchCityResponse> => {
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

export interface SearchCityResponse {
  results: Result[];
  generationtime_ms: number;
}

export interface Result {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  timezone: string;
  country_id: number;
  country: string;
  admin1: string;
  admin2_id?: number;
  admin2?: string;
}
