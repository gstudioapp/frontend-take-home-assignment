import React, { FC } from 'react';
import { ISidebarItem } from 'components/UiSidebar/index';
import { GlobalProvidersWrapper, UiAvatar, UiSidebar } from 'components';
import { Flex } from '@chakra-ui/react';
import {
  ColorSwatchOutline,
  StarOutline,
  ViewGridOutline,
} from '@graywolfai/react-heroicons';

const UiLayout: FC = ({ children }) => {
  const sidebarItems: ISidebarItem[] = [
    {
      label: 'Projects',
      path: '/projects',
      icon: <ViewGridOutline width="1.3rem" />,
    },
    {
      label: 'Themes',
      path: '/themes',
      icon: <ColorSwatchOutline width="1.3rem" />,
    },
    {
      label: 'Examples',
      path: '/examples',
      icon: <StarOutline width="1.3rem" />,
    },
  ];

  return (
    <GlobalProvidersWrapper>
      <Flex height="100vh">
        <UiSidebar sidebarItems={sidebarItems}>
          <UiAvatar
            userName="Jair Junior"
            imageSrc="https://bit.ly/dan-abramov"
          />
        </UiSidebar>
        {children}
      </Flex>
    </GlobalProvidersWrapper>
  );
};

export default UiLayout;
