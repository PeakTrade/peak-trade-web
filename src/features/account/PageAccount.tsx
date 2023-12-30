import { Button, Stack } from '@chakra-ui/react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import DarkModeSwitch from '@/components/DarkModeSwitch';
import { Icon } from '@/components/Icon';

const PageAccount = () => {
  const router = useRouter();
  return (
    <Stack h="full" justify="space-around">
      <DarkModeSwitch />;
      <Button
        leftIcon={<Icon icon={LogOut} fontSize="1.5em" />}
        variant="@dangerPrimary"
        onClick={() => router.push(`/logout?redirect=login`)}
      >
        Log out
      </Button>
    </Stack>
  );
};

export default PageAccount;
