import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/Icon';

import LoginForm from './LoginForm';

const PageLogin = () => {
  return (
    <Center position="relative" w="full" h="full">
      <Stack alignItems="center">
        <Box
          position="relative"
          w={32}
          h={32}
          aspectRatio={1}
          aria-label="image-container"
        >
          <Image src="/logo.png" alt="main logo" fill />
        </Box>
        <Text>
          Want to join the adventure ?{' '}
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
            Create an account
          </Button>
        </Text>
        <LoginForm />
      </Stack>
    </Center>
  );
};

export default PageLogin;
