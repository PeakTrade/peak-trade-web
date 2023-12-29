'use client';

import { Center, Stack } from '@chakra-ui/react';

import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  return (
    <Center position="relative" w="full" h="full">
      <Stack>
        <RegisterForm />
      </Stack>
    </Center>
  );
};

export default RegisterPage;
