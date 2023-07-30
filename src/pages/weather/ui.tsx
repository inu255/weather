import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Weather() {
  useEffect(() => {
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
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <div>Weather</div>;
}
