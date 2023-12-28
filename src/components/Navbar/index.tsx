'use client';

import { FC } from 'react';

import {
  Avatar,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { LogIn, UserPlus2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const user = {
    email: null,
  };
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
        <Menu isLazy placement="bottom-end">
          <MenuButton
            as={Button}
            variant="link"
            aria-label="Account menu button"
          >
            <Avatar name={user.email ?? 'Guest'} size="md" />
          </MenuButton>
          <MenuList>
            <MenuGroup title={user.email ?? 'Welcome guest'} mt={-0.15}>
              <MenuDivider />
              <MenuItem
                as={Link}
                href="/register"
                icon={<UserPlus2 />}
                color="text-dimmed"
              >
                Create account
              </MenuItem>
              <MenuItem
                as={Link}
                href="/login"
                icon={<LogIn />}
                color="text-dimmed"
              >
                Log in
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Navbar;
