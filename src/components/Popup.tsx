import { chakra } from '@chakra-ui/react';
import { Popup as LeafletPopup } from 'react-leaflet';

const Popup = chakra(LeafletPopup, {
  baseStyle: {
    '.leaflet-popup-content-wrapper': { bg: 'bg-default', borderRadius: 'md' },
    '.leaflet-popup-tip': { bg: 'bg-default' },
  },
});

export default Popup;
