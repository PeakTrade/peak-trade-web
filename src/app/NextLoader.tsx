'use client';

import { FC } from 'react';

import { useColorModeValue, useToken } from '@chakra-ui/react';
import NextTopLoader from 'nextjs-toploader';

interface NextLoaderProps {
  darkColor?: string;
  lightColor?: string;
  showSpinner?: boolean;
}

const NextLoader: FC<NextLoaderProps> = ({
  lightColor = 'brand.900',
  darkColor = 'brand.300',
  showSpinner = false,
}) => {
  const loaderColorKey = useColorModeValue(lightColor, darkColor);
  const loaderColor = useToken('colors', loaderColorKey);

  return (
    <NextTopLoader
      height={2}
      zIndex={99999}
      color={loaderColor}
      showSpinner={showSpinner}
    />
  );
};

export default NextLoader;
