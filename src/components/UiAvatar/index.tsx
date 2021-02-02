import React, { FC } from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { DotsVerticalSolid } from '@graywolfai/react-heroicons';

export interface IAvatarProps {
  imageSrc: string;
  userName: string;
}

const UiAvatar: FC<IAvatarProps> = ({ userName, imageSrc }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" isTruncated={true}>
        <Avatar
          size="sm"
          marginRight="0.75rem"
          src={imageSrc}
          name={userName}
        />
        <Text
          fontSize="sm"
          fontFamily="mono"
          fontWeight="medium"
          isTruncated={true}
          width="100%"
        >
          {userName}
        </Text>
      </Flex>
      <Box
        width="1rem"
        minWidth="1rem"
        color="gray.500"
        cursor="pointer"
        paddingY="0.3rem"
        borderRadius="base"
        transition="0.3s"
        _hover={{ bg: 'gray.100', color: 'gray.600' }}
      >
        <DotsVerticalSolid />
      </Box>
    </Flex>
  );
};

export default UiAvatar;
