'use client';

import { FC, PropsWithChildren } from 'react';

import { ColorModeScript } from '@chakra-ui/react';

import TrpcProvider from '@/lib/trpc/TrpcProvider';
import theme, { COLOR_MODE_STORAGE_KEY } from '@/theme';

import Providers from './Providers';

export const Document: FC<PropsWithChildren> = ({ children }) => {
  return (
    // TODO i18n lang
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning={true}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
          storageKey={COLOR_MODE_STORAGE_KEY}
        />
        <Providers>
          <TrpcProvider>{children}</TrpcProvider>
        </Providers>
      </body>
    </html>
  );
};
