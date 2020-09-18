import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = { ...chakraTheme.fonts, mono: "'Menlo', monospace" };

export const breakpoints = ['30em', '48em', '62em', '80em'];

export const theme = {
  ...chakraTheme,
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};
