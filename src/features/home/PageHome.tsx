import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { MapPinned, Recycle, Share } from 'lucide-react';

import DarkModeSwitch from '@/components/DarkModeSwitch';
import { Icon } from '@/components/Icon';

const perks = [
  {
    title: 'Rent your gear',
    icon: Share,
    description:
      'Need some extra material just for one day ? With PeakTrade, it has never been so easy to rent gear. ',
  },
  {
    title: 'New life for old equipment',
    icon: Recycle,
    description:
      'Not using your old material ? Want to buy new gear ? Have a look through our market place.',
  },
  {
    title: 'Discover new spots',
    icon: MapPinned,
    description:
      'Thanks to our interactive map, share your own climbin spots and discover new ones from other users.',
  },
];
const PageHome = () => {
  return (
    <Stack h="full" w="full">
      <Box position="absolute" left={0}>
        <DarkModeSwitch />
      </Box>
      <Flex h="full"></Flex>
      <Stack
        w="full"
        direction={{ base: 'column', md: 'row' }}
        spacing={12}
        px={12}
        py={6}
        m={2}
        borderRadius="xl"
        boxShadow="layout"
        bg="gray.100"
        align={{ base: 'center', md: 'start' }}
        _dark={{
          bg: 'gray.900',
          boxShadow: 'layout-dark',
        }}
      >
        {perks.map((perk, index) => (
          <Flex
            key={`perk-${index}`}
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            wrap="wrap"
            gap={2}
          >
            <Icon
              icon={perk.icon}
              fontSize="3rem"
              bg="brand.200"
              color="brand.700"
              _dark={{
                bg: 'brand.700',
                color: 'brand.200',
              }}
              w="20"
              h="20"
              borderRadius="full"
              borderBottomStartRadius="0"
            />
            <Heading fontSize="xl">{perk.title}</Heading>
            <Text color="text-dimmed">{perk.description}</Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default PageHome;
