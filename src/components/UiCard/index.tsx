import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const UiCard: FC = ({ children }) => (
  <Box
    width="22rem"
    boxShadow="base"
    borderWidth="0.5px"
    borderColor="gray.200"
    borderRadius="1rem"
    bg="white"
    padding="1.8rem"
  >
    {children}
  </Box>
);

export default UiCard;
