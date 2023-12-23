import React, { useEffect, useState } from "react";
import { getFullWeatherData } from "src/features/get-weather";
import { decodeWeatherCode } from "src/shared/lib";
import { ThemeProvider } from "styled-components";

const commonStyles = {
  colors: {
    primary: "#FFF",
    text: "#000",
  },
  borderRadius: "12px",
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(commonStyles);
  useEffect(() => {
    getFullWeatherData.done.watch(({ result }) => {
      const code = result.current_weather.weathercode;
      setTheme((theme) => ({
        ...theme,
        colors: { ...theme.colors, primary: decodeWeatherCode(code).color },
      }));
    });
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
