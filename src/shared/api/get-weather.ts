const API_KEY = import.meta.env.VITE_API_KEY;

import { useEffect, useState } from "react";

export function useGetWeather() {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setIsLoading(true);
    const url =
      "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Novosibirsk&contentType=json&unitGroup=metric&shortColumnNames=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };
    (async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        setWeatherData(result);
      } catch (error) {
        // console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }

  return { data: weatherData, isLoading, isError, refetch: getData };
}
