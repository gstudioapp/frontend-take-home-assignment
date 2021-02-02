import React from 'react';
import Head from 'next/head';

import { FC } from 'react';
import { Global, css } from '@emotion/react';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    background: #f8f8f8;
  }
`;

const Main: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>GStudioApp - FrontEnd assignment</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Global styles={styles} />
      {children}
    </>
  );
};

export default Main;
