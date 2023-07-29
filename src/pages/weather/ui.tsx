import { useEffect } from "react";

export default function Weather() {
  useEffect(() => {
    const url =
      "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Novosibirsk&contentType=json&unitGroup=metric&shortColumnNames=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "355e7a3362msh0de78d8db9e7532p1f146ajsn62c23ec0abc2",
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
