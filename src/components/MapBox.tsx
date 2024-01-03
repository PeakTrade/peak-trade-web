import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { ChakraProps, chakra, useDisclosure } from '@chakra-ui/react';
import { Marker } from 'leaflet';
import {
  MapContainer as LeafletMapContainer,
  MapContainerProps,
  TileLayer,
  TileLayerProps,
} from 'react-leaflet';

import { Location } from '@/server/config/schemas/Map';

export type MapBoxContextProps = {
  currentLocation: Location | Marker | null;
  setCurrentLocation: Dispatch<SetStateAction<Location | Marker | null>>;
  useDrawer: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

const MapBoxContext = createContext<MapBoxContextProps | null>(null);

export const useMapBoxContext: () => MapBoxContextProps = () => {
  const ctx = useContext(MapBoxContext);
  if (ctx === null) {
    throw new Error('Missing parent <MapContainer> component');
  }
  return ctx;
};

const MapContainer = chakra(LeafletMapContainer, {
  baseStyle: {
    _hover: {
      cursor: 'crosshair',
    },
  },
});

export type MapBoxProps = Overwrite<ChakraProps, MapContainerProps> & {
  tileLayerProps: TileLayerProps;
};
const MapBox: FC<MapBoxProps> = ({ tileLayerProps, children, ...props }) => {
  const [currentLocation, setCurrentLocation] = useState<
    Location | Marker | null
  >(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const useDrawer = { isOpen, onOpen, onClose };
  return (
    <MapContainer {...props}>
      <MapBoxContext.Provider
        value={{
          currentLocation,
          setCurrentLocation,
          useDrawer,
        }}
      >
        <TileLayer {...tileLayerProps} zIndex={+(props.zIndex ?? 10) + 1} />
        {children}
      </MapBoxContext.Provider>
    </MapContainer>
  );
};

export default MapBox;
