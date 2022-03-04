import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        orange: string;
        white: string;
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
  }
}
