'use client';

import { FC, PropsWithChildren } from 'react';

import { ColorModeScript } from '@chakra-ui/react';

import PageContainer from '@/components/PageContainer';
import TrpcProvider from '@/lib/trpc/TrpcProvider';
import theme, { COLOR_MODE_STORAGE_KEY } from '@/theme';

import Providers from './Providers';

export const Document: FC<PropsWithChildren> = ({ children }) => {
  return (
    // TODO i18n lang
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
          storageKey={COLOR_MODE_STORAGE_KEY}
        />
        <Providers>
          <TrpcProvider>
            <PageContainer>{children}</PageContainer>
          </TrpcProvider>
        </Providers>
      </body>
    </html>
  );
};
