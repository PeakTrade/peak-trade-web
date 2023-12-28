import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import { config } from './config';
import themeCore from './core';
import { semanticTokens } from './semantic-tokens';

export const theme = extendTheme({
  config,
  semanticTokens,
  ...themeCore,
  components: { ...components },
});
