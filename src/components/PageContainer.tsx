import { FC } from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

const PageContainer: FC<StackProps> = ({ children, ...props }) => {
  return (
    <Stack
      mx="auto"
      w="full"
      h="100vh"
      px={{ base: 2.5, md: 20 }}
      maxWidth="6xl"
      bg="brand.100"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default PageContainer;
