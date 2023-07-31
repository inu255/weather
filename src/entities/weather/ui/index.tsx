// import { useGetWeather } from "src/shared/api";
import MainData from "./main-data";
import { useEffect } from "react";
import { getFullWeatherData } from "../api";

export function Weather() {
  // const { data, isLoading, isError } = useGetWeather();

  // useEffect(() => {
  //   if (data && !isLoading && !isError) {
  //     console.log(data);
  //   }
  // }, [data, isLoading, isError]);

  useEffect(() => {
    (async () => {
      await getFullWeatherData();
    })();
  }, []);

  // if (isLoading) {
  //   return "Loading...";
  // } else {
  //   return (
  //     <div>
  //       <MainData />
  //     </div>
  //   );
  // }

  return (
    <div>
      <MainData />
    </div>
  );
}
