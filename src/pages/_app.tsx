import React from 'react';

import { AppProps } from 'next/app';
import { UiLayout } from 'components';

function App({ Component, pageProps }: AppProps) {
  return (
    <UiLayout>
      <Component {...pageProps} />
    </UiLayout>
  );
}

export default App;
