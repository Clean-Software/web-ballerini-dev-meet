import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        orange: string;
        white: string;
        black: string;
        gray: string;
      };
      gray: {
        300: string;
        400: string;
      };
      semantic: {
        green: string;
      };
      background: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
