import type { AppProps } from "next/app";

import GlobalStyle from "../components/globalstyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
