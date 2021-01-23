import { extendTheme } from '@chakra-ui/react';

import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from './foundations';

export const theme = extendTheme({
  // Foundations
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  space,

  // Typography
  fonts,
  fontSizes,
  fontWeights,

  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});
