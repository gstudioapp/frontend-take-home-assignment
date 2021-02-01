import React, { FC } from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';

const UiAvatar: FC = () => {
  return (
    <Flex alignItems="center">
      <Avatar
        size="sm"
        name="Jair Junior"
        cursor="pointer"
        src="https://bit.ly/dan-abramov"
        marginRight="0.75rem"
      />
      <Text fontFamily="mono" fontWeight="medium" fontSize="sm">
        Jair Junior
      </Text>
    </Flex>
  );
};

export default UiAvatar;
