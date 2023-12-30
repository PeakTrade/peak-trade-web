'use client';

import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { NAVBAR_MOBILE_HEIGHT } from '@/theme';

import NavItems from './NavItems';

interface NavbarMobileProps {}

const NavbarMobile: FC<NavbarMobileProps> = () => {
  return (
    <HStack
      position="relative"
      h={`${NAVBAR_MOBILE_HEIGHT}vh`}
      w="full"
      align="center"
      justify="center"
      px="4"
      borderTop="1px"
      borderTopColor="gray.200"
      boxShadow="layout"
      _dark={{
        boxShadow: 'layout-dark',
        borderTopColor: 'gray.700',
      }}
    >
      <NavItems />
    </HStack>
  );
};

export default NavbarMobile;
