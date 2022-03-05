import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  palette: {
    primary: {
      orange: "#FF5100",
      white: "#FFFFFF",
      gray: "#C6C6C6",
      black: "#000000",
    },
    semantic: {
      green: "#04D361",
    },
    gray: {
      "300": "#BFBFBF",
      "400": "#959595",
    },
    background: "#282828",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "832px",
    lg: "992px",
    xl: "1200px",
  },
};
