import { Box, Button, Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import FieldInput from '@/components/FieldInput';
import { useToastError, useToastSuccess } from '@/components/Toast';
import { trpc } from '@/lib/trpc/client';
import { LoginFormFields } from '@/server/config/schemas/Users';

const LoginForm = () => {
  const toastError = useToastError();
  const onLoginSuccess = useOnLoginSuccess({ defaultRedirect: '/' });
  const { mutate: login, isLoading } = trpc.auth.login.useMutation({
    onSuccess: onLoginSuccess,
    onError: (error) => {
      if (error.data?.code === 'BAD_REQUEST') {
        toastError({
          title: error.data.code,
          description: error.message ?? '',
        });
      }
    },
  });

  const form = useForm<LoginFormFields>({
    onValidSubmit: (values) => login(values),
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

export const useOnLoginSuccess = ({
  defaultRedirect = '/',
}: {
  defaultRedirect: string;
}) => {
  const toastSuccess = useToastSuccess();
  const router = useRouter();
  const trpcUtils = trpc.useUtils();
  const queryCache = useQueryClient();
  const searchParams = useSearchParams();
  return async () => {
    queryCache.clear();

    // Optimistic Update
    trpcUtils.auth.checkAuthenticated.setData(undefined, {
      isAuthenticated: true,
    });
    toastSuccess({ description: 'Login successful' });
    router.push(searchParams.get('origin') || defaultRedirect || '/');
    router.refresh();
  };
};

export default LoginForm;
