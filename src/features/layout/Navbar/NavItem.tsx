import { FC, PropsWithChildren } from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon } from '@/components/Icon';

import { NAV_ITEMS } from './constants';

type NavItem = (typeof NAV_ITEMS)[number];

type NavItemProps = FlexProps &
  PropsWithChildren & {
    href: string;
    icon: FC;
  };

const NavItem: FC<NavItemProps> = ({ icon, href, children, ...rest }) => {
  const isActive = href === usePathname();
  return (
    <Flex
      as={Link}
      href={href}
      direction={{ base: 'column', md: 'row' }}
      bg="transparent"
      align={{ base: 'center', md: 'end' }}
      gap={{ base: -1, md: 1 }}
      opacity={isActive ? 1 : 0.6}
      fontWeight={isActive ? 'bold' : 'semibold'}
      fontSize={{ base: 'sm', md: 'md' }}
      cursor="pointer"
      width={{ base: '15%', md: 'fit-content' }}
      _hover={{
        color: 'gray.600',
      }}
      _dark={{
        _hover: {
          color: 'gray.300',
        },
      }}
      {...rest}
    >
      <Icon icon={icon} fontSize={{ base: '2xl', md: 'lg' }} />
      {children}
    </Flex>
  );
};
export default NavItem;
