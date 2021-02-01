import React, { FC } from 'react';
import { ISidebarItem } from 'components/UiSidebar/index';
import { GlobalProvidersWrapper, UiSidebar } from 'components';
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
      icon: <ViewGridOutline width="22px" />,
    },
    {
      label: 'Themes',
      path: '/themes',
      icon: <ColorSwatchOutline width="22px" />,
    },
    {
      label: 'Examples',
      path: '/examples',
      icon: <StarOutline width="22px" />,
    },
  ];

  return (
    <GlobalProvidersWrapper>
      <Flex height="100%">
        <UiSidebar sidebarItems={sidebarItems} />
        {children}
      </Flex>
    </GlobalProvidersWrapper>
  );
};

export default UiLayout;
