import { FC } from 'react';

import { Flex, HStack, useBreakpointValue } from '@chakra-ui/react';

import AccountMenuNav from './AccountMenuNav';
import NavItem from './NavItem';
import { NAV_ITEMS } from './constants';

interface NavItemsProps {}

const NavItems: FC<NavItemsProps> = () => {
  const showAccountMenu = useBreakpointValue({ base: true, md: false });

  return (
    <HStack
      spacing={{ base: 0, md: 8 }}
      justify={{ base: 'space-around', md: 'center' }}
      w={{ base: 'full', md: 'fit-content' }}
    >
      {NAV_ITEMS.map((item, index) => {
        return (
          <NavItem key={`navItem-${index}`} icon={item.icon} href={item.href}>
            {item.label}
          </NavItem>
        );
      })}
      {showAccountMenu && (
        <Flex width="10%" justify="center">
          <AccountMenuNav />
        </Flex>
      )}
    </HStack>
  );
};

export default NavItems;
