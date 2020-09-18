import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React, { FC } from 'react';

import { Main } from 'layouts/Main';
import {theme} from 'theme';

export const GlobalProvidersWrapper: FC = ({ children }) => (
  <Main>
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  </Main>
);
