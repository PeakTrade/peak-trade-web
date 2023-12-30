import { Center, Stack } from '@chakra-ui/react';

import LoginForm from './LoginForm';

const PageLogin = () => {
  return (
    <Center position="relative" w="full" h="full">
      <Stack>
        <LoginForm />
      </Stack>
    </Center>
  );
};

export default PageLogin;
