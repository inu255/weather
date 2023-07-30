import React from "react";
import { ThemeProvider } from "styled-components";

// const theme = {
//   colors: {
//     yellow: "#FFE142",
//     blue: "#42C6FF",
//     pink: "#FF64D4",
//     white: "#FFF",
//     black: "#000",
//   },
// };

const yellow = {
  colors: {
    primary: "#FFE142",
    text: "#000",
  },
  borderRadius: "12px",
};

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={yellow}>{children}</ThemeProvider>;
}
