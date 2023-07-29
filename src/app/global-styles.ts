import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Source+Sans+3:wght@400;500;600&display=swap');
   * {
    font-family: "Open Sans", sans-serif;
   };

   body {
    background-color: ${({ theme }) => theme.colors.yellow};
   };
`;
