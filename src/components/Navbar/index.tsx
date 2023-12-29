'use client';

import { FC } from 'react';

import { Box, HStack } from '@chakra-ui/react';
import Image from 'next/image';

import AccountMenuNav from './AccountMenuNav';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <HStack
      w="full"
      h={16}
      align="center"
      justify="space-between"
      borderBottomWidth={1}
      borderColor="text-muted"
      boxShadow="layout"
      px={{ base: 2, md: 4 }}
      zIndex={2}
    >
      <Box
        position="relative"
        w={16}
        h={16}
        aspectRatio={1}
        aria-label="image-container"
      >
        <Image src="/logo.png" alt="main logo" fill />
      </Box>

      <HStack align="center" h="full">
        <AccountMenuNav />
      </HStack>
    </HStack>
  );
};

export default Navbar;
