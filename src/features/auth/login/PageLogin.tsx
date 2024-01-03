import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Icon } from '@/components/Icon';
import Logo from '@/components/Icons/Logo';
import PageContainer from '@/components/PageContainer';

import LoginForm from './LoginForm';

const PageLogin = () => {
  return (
    <PageContainer>
      <Center position="relative" w="full" h="full">
        <Stack alignItems="center">
          <Logo height={150} width={150} />
          <Text>
            Want to join the adventure ?{' '}
            <Button
              as={Link}
              href="register"
              variant="unstyled"
              rightIcon={<Icon icon={ArrowRight} />}
              fontWeight="bold"
              textDecoration="underline"
              transition="150ms"
              _hover={{
                color: 'brand.700',
              }}
            >
              Create an account
            </Button>
          </Text>
          <LoginForm />
        </Stack>
      </Center>
    </PageContainer>
  );
};

export default PageLogin;
