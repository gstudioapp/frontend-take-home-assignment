import { AppProps } from 'next/app';
import React from 'react';
import {GlobalProvidersWrapper} from "components/GlobalProvidersWrapper";

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvidersWrapper>
      <Component {...pageProps} />
    </GlobalProvidersWrapper>
  );
}


export default App;
