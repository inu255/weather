import Weather from "~pages/weather";
import Layout from "./with-layout";

import "normalize.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global-styles";

const theme = {
  colors: {
    yellow: "#FFE142",
    blue: "#42C6FF",
    pink: "#FF64D4",
    white: "#FFF",
    black: "#000",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Weather />
      </Layout>
    </ThemeProvider>
  );
}
