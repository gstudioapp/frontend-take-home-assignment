import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Logo from '-!svg-react-loader!./../../assets/logo.svg';

export interface ISidebarItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

export interface ISidebarProps {
  sidebarItems: ISidebarItem[];
}

const UiSidebar: FC<ISidebarProps> = ({ sidebarItems, children }) => {
  const { pathname } = useRouter();

  return (
    <Box
      bg="white"
      width="191px"
      height="100%"
      minWidth="191px"
      borderTopRightRadius="20px"
      borderBottomRightRadius="20px"
    >
      <Box paddingX="3" paddingTop="6" height="auto" paddingBottom="5">
        <Flex width="100%" justifyContent="center" marginBottom="2.6rem">
          <Logo />
        </Flex>
        {sidebarItems?.map(({ icon, path, label }, index) => (
          <Link href={path} key={index}>
            <Button
              isFullWidth
              variant="ghost"
              paddingX="1rem"
              fontFamily="mono"
              fontWeight="normal"
              justifyContent="flex-start"
              borderRadius="0.5rem"
              leftIcon={icon}
              bg={pathname === path ? 'purple.50' : ''}
              color={pathname === path ? 'purple.600' : ''}
              _hover={{ bg: 'purple.50', color: 'purple.600' }}
              _notLast={{ marginBottom: '0.8rem' }}
            >
              {label}
            </Button>
          </Link>
        ))}
      </Box>
      {children && (
        <Box
          height="auto"
          borderTop="sm"
          borderColor="gray.50"
          padding="4"
          paddingTop="5"
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default UiSidebar;
