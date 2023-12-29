'use client';

import { FC, useEffect } from 'react';

import {
  Avatar,
  Button,
  Center,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import { LogOut, User2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { trpc } from '@/lib/trpc/client';

interface AccountMenuNavProps {}

const AccountMenuNav: FC<AccountMenuNavProps> = () => {
  const router = useRouter();

  const account = trpc.account.getAvatar.useQuery();

  useEffect(() => {}, [account]);

  if (account.isLoading)
    return (
      <Center>
        <Spinner size="md" />
      </Center>
    );

  if (!account.data)
    return (
      <HStack>
        <Button as={Link} href="login">
          Connect
        </Button>
        <Button as={Link} href="register">
          Create Account
        </Button>
      </HStack>
    );

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} variant="link" aria-label="Account menu button">
        <Avatar name={account?.data.email ?? ''} size="md" icon={<></>}>
          {account?.isLoading && <Spinner size="md" />}
        </Avatar>
      </MenuButton>
      <MenuList>
        <MenuGroup title={account.data.name} mt={-0.15}>
          <MenuDivider />
          <MenuItem
            as={Link}
            href="/account"
            icon={<User2 />}
            color="text-dimmed"
          >
            My account
          </MenuItem>
          <MenuItem
            icon={<LogOut />}
            color="text-dimmed"
            onClick={() => router.push(`/logout?redirect=login`)}
          >
            Log out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default AccountMenuNav;
