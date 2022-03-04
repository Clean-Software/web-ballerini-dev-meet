import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/styles";

const DevMeet = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default DevMeet;
