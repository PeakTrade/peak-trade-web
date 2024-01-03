import { useColorModeValue } from '@chakra-ui/react';
import { LocateFixed } from 'lucide-react';

import { LeafletButtonControl } from '@/lib/react-leaflet/LeafletButtonControl';

export const ButtonControl = ({ handler }: { handler: () => void }) => {
  const isDark = useColorModeValue(false, true);

  return (
    <LeafletButtonControl
      position="topright"
      content={<LocateFixed height={28} width={28} />}
      handler={handler}
      isDark={isDark}
    />
  );
};
