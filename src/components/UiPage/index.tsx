import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const UiPage: FC = ({ children }) => (
  <Box
    width="100%"
    height="100%"
    paddingX="4rem"
    paddingTop="5rem"
    paddingBottom="2rem"
    overflow="auto"
  >
    {children}
  </Box>
);

export default UiPage;
