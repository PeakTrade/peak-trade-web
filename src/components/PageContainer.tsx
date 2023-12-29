import { FC } from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

const PageContainer: FC<StackProps> = ({ children, ...props }) => {
  const { maxWidth, ...rest } = props;
  return (
    <Stack
      spacing={0}
      mx="auto"
      w="full"
      h="100vh"
      px={{ base: 2.5, md: 20 }}
      maxWidth={maxWidth ?? '6xl'}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default PageContainer;
