import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.colors.text};
   };

   body {
    background-color: ${({ theme }) => theme.colors.primary};
   };
`;
