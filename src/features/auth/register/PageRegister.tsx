import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Icon } from '@/components/Icon';
import Logo from '@/components/Logo';

import RegisterForm from './RegisterForm';

const PageRegister = () => {
  return (
    <Center position="relative" w="full" h="full">
      <Stack alignItems="center">
        <Logo height={150} width={150} />

        <Text>
          Already have an account ?{' '}
          <Button
            as={Link}
            href="login"
            variant="unstyled"
            rightIcon={<Icon icon={ArrowRight} />}
            fontWeight="bold"
            textDecoration="underline"
            transition="150ms"
            _hover={{
              color: 'brand.700',
            }}
          >
            Log in
          </Button>
        </Text>
        <RegisterForm />
      </Stack>
    </Center>
  );
};

export default PageRegister;
