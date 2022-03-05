import Loading from "@components/Loading";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/styles";
import { defaultTheme } from "../styles/theme";

const DevMeet = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Loading isLoading>
      <Component {...pageProps} />
    </Loading>
  </ThemeProvider>
);

export default DevMeet;
