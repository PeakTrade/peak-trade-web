import { Box, Button, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail, isMinLength, isNotEmptyString } from '@formiz/validations';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import FieldInput from '@/components/FieldInput';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { trpc } from '@/lib/trpc/client';
import { RegisterFormFields } from '@/server/config/schemas/Users';

const RegisterForm = () => {
  const toastSuccess = useToastSuccess();
  const toastError = useToastError();

  const router = useRouter();
  const { mutate: register, isLoading } = trpc.auth.register.useMutation({
    onSuccess: () => {
      toastSuccess({ title: 'Success', description: 'Account created' });
      trpc
        .useUtils()
        .auth.checkAuthenticated.setData(undefined, { isAuthenticated: true });
      router.push('/login');
    },
    onError: (error) => {
      if (error.data?.code === 'CONFLICT') {
        toastError({
          title: 'CONFLICT',
          description: 'Email already taken',
        });
      }
    },
  });

  const form = useForm<RegisterFormFields>({
    onValidSubmit: (values) => register(values),
  });
  return (
    <Formiz connect={form} autoForm>
      <Stack
        spacing={8}
        p={4}
        bg="white"
        borderRadius="xl"
        width="lg"
        align="center"
      >
        <Box
          position="relative"
          w={32}
          h={32}
          aspectRatio={1}
          aria-label="image-container"
        >
          <Image src="/logo.png" alt="main logo" fill />
        </Box>
        <FieldInput
          label="Name"
          name="name"
          type="text"
          validations={[
            {
              handler: isNotEmptyString(),
              message: 'Your name can not be empty',
            },
          ]}
          isRequired
        />
        <FieldInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          validations={[
            {
              handler: isEmail(),
              message: 'Invalid email',
            },
          ]}
          isRequired
        />
        <FieldInput
          size="lg"
          label="Password"
          name="password"
          type="password"
          validations={[
            {
              handler: isMinLength(8),
              message: 'Password should be at least 8 characters long',
            },
          ]}
          isRequired
        />
        <Button
          type="submit"
          rightIcon={<ArrowRight />}
          variant="@primary"
          w="full"
          isLoading={isLoading}
          isDisabled={form.isSubmitted && !form.isValid}
        >
          Create account
        </Button>
      </Stack>
    </Formiz>
  );
};

export default RegisterForm;
