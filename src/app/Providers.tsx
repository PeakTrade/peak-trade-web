import { FC, PropsWithChildren } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react';

import theme, { COLOR_MODE_STORAGE_KEY } from '@/theme';

const localStorageManager = createLocalStorageManager(COLOR_MODE_STORAGE_KEY);

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider
        colorModeManager={localStorageManager}
        theme={{ ...theme }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
