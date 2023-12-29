'use client';

import { Box, Center, Stack } from '@chakra-ui/react';
import Image from 'next/image';

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
