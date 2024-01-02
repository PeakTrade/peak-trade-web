'use client';

import { FC, useEffect } from 'react';

import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react';
import { LogIn, LogOut, User2, UserPlus2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Icon } from '@/components/Icon';
import { trpc } from '@/lib/trpc/client';
import { AccountAvatar } from '@/server/config/schemas/Account';

interface AccountMenuNavProps {}

export const AccountMenuNav: FC<AccountMenuNavProps> = () => {
  const showMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const account = trpc.account.getAvatar.useQuery();

  useEffect(() => {}, [account]);

  if (account.isLoading) return <LoadingMenuNav showMobile={showMobile} />;

  if (!account.data) return <GuestMenuNav showMobile={showMobile} />;

  return <AuthenticatedMenuNav {...account.data} showMobile={showMobile} />;
};

const LoadingMenuNav = ({ showMobile = false }: { showMobile?: boolean }) => {
  if (showMobile) {
    return <Avatar size="sm" icon={<Icon icon={Spinner} fontSize="1.5em" />} />;
  }
  return <Avatar borderRadius="md" size="md" icon={<Spinner />} mr={5} />;
};

const GuestMenuNav = ({ showMobile = false }: { showMobile?: boolean }) => {
  if (showMobile)
    return (
      <Avatar
        as={Link}
        href="login"
        size="sm"
        icon={<Icon icon={User2} fontSize="1.5em" />}
      />
    );

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} variant="link" aria-label="Account menu button">
        <Avatar borderRadius="md" size="md" icon={<User2 />} mr={5} />
      </MenuButton>
      <MenuList>
        <MenuItem
          as={Link}
          color="brand.600"
          icon={<Icon icon={LogIn} fontSize="1.5em" />}
          href="login"
        >
          Connect
        </MenuItem>
        <MenuItem
          as={Link}
          href="register"
          icon={<Icon icon={UserPlus2} fontSize="1.5em" />}
        >
          Create Account
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const AuthenticatedMenuNav = ({
  showMobile = false,
  ...account
}: AccountAvatar & { showMobile?: boolean }) => {
  const router = useRouter();
  if (showMobile)
    return (
      <Avatar as={Link} href="account" name={account.email ?? ''} size="sm" />
    );

  return (
    <Menu placement="bottom-end">
      <MenuButton as={Button} variant="link" aria-label="Account menu button">
        <Avatar borderRadius="md" name={account.email ?? ''} size="md" mr={5} />
      </MenuButton>
      <MenuList>
        <MenuGroup title={account.name} mt={-0.15}>
          <MenuDivider />
          <MenuItem
            as={Link}
            href="/account"
            icon={<Icon icon={User2} fontSize="1.5em" />}
            color="text-dimmed"
          >
            My account
          </MenuItem>
          <MenuItem
            icon={<Icon icon={LogOut} fontSize="1.5em" />}
            color="error.600"
            onClick={() => router.push(`/logout?redirect=login`)}
            _dark={{
              color: 'error.300',
            }}
          >
            Log out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
export default AccountMenuNav;
