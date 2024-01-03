import { FC } from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

import { NAVBAR_DESKTOP_HEIGHT, NAVBAR_MOBILE_HEIGHT } from '@/theme';

const PageContainer: FC<StackProps> = ({ children, ...props }) => {
  const { maxWidth, ...rest } = props;
  return (
    <Stack
      spacing={0}
      mx={{ base: 0, md: 'auto' }}
      w="full"
      h={{
        base: `${100 - NAVBAR_MOBILE_HEIGHT}vh`,
        md: `${100 - NAVBAR_DESKTOP_HEIGHT}vh`,
      }}
      px={{ base: 5, md: 20 }}
      maxWidth={maxWidth ?? '6xl'}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default PageContainer;
