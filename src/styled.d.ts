// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      blue: string;
      pink: string;
      white: string;
      black: string;
    };
  }
}
