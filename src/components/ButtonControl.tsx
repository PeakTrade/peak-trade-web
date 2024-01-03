import { useColorModeValue } from '@chakra-ui/react';
import { Mountain } from 'lucide-react';

import { LeafletButtonControl } from '@/lib/react-leaflet/LeafletButtonControl';

export const ButtonControl = ({ handler }: { handler: () => void }) => {
  const isDark = useColorModeValue(false, true);

  return (
    <LeafletButtonControl
      position="topright"
      content={<Mountain />}
      handler={handler}
      isDark={isDark}
    />
  );
};
