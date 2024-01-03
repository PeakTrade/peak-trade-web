'use client';

import { FC } from 'react';

import { Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import Logo from '@/components/Icons/Logo';
import { NAVBAR_DESKTOP_HEIGHT } from '@/theme';

import AccountMenuNav from './AccountMenuNav';
import NavItems from './NavItems';

interface NavbarProps {}

const NavbarDesktop: FC<NavbarProps> = () => {
  return (
    <Flex justify="center">
      <HStack
        position="relative"
        w="full"
        maxW="5xl"
        h={`${NAVBAR_DESKTOP_HEIGHT}vh`}
        align="center"
        justify="space-between"
        px={2}
        spacing={8}
        zIndex={2}
      >
        <Link href="/">
          <Logo height={44} width={44} />
        </Link>
        <HStack w="full" justify="space-between">
          <NavItems />
          <HStack justify="flex-end" spacing={-4}>
            <AccountMenuNav />
          </HStack>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default NavbarDesktop;
