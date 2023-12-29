"use client"

import { Center, Stack } from '@chakra-ui/react';

import LoginForm from './LoginForm';

const LogInPage = () => {
  return (
    <Center position="relative" w="full" h="full">
      <Stack>
        <LoginForm />
      </Stack>
    </Center>
  );
};

export default LogInPage;
