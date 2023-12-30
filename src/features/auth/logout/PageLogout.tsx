import { useEffect } from 'react';

import { Center, Heading, Spinner, Stack } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

import { trpc } from '@/lib/trpc/client';

const PageLogout = () => {
  const router = useRouter();
  const queryCache = useQueryClient();
  const logout = trpc.auth.logout.useMutation();
  const trpcUtils = trpc.useUtils();
  const searchParams = useSearchParams();

  useEffect(() => {
    const trigger = async () => {
      if (!logout.isIdle) return;
      logout.mutate();
      queryCache.clear();
      // Optimistic Update
      trpcUtils.auth.checkAuthenticated.setData(undefined, {
        isAuthenticated: false,
      });
      router.replace(searchParams.get('redirect') || '/');
      router.refresh();
    };
    trigger();
  }, [
    searchParams,
    queryCache,
    router,
    logout,
    trpcUtils.auth.checkAuthenticated,
  ]);

  return (
    <Center flex="1">
      <Stack align="center" spacing={8}>
        <Heading fontSize="md">Disconnecting...</Heading>
        <Spinner size="lg" />
      </Stack>
    </Center>
  );
};

export default PageLogout;
