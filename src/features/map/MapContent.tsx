import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { LeafletMouseEvent, marker } from 'leaflet';
import { Marker } from 'leaflet';
import { useRouter } from 'next/navigation';
import { useMap } from 'react-leaflet';

import Location from '@/components/Location';
import { useMapBoxContext } from '@/components/MapBox';
import { useToastWarning } from '@/components/Toast';
import useOnMapClick from '@/hooks/useOnMapClick';
import { trpc } from '@/lib/trpc/client';

import LocationForm from './LocationForm';
import LocationPopUp from './LocationPopUp';
import { ICONS } from './config';

const MapContent = () => {
  const router = useRouter();
  const toastWarning = useToastWarning();
  const map = useMap();
  const mapBoxContext = useMapBoxContext();
  const {
    currentLocation,
    setCurrentLocation,
    useDrawer: { isOpen, onOpen, onClose },
  } = mapBoxContext;

  const showOnBottom = useBreakpointValue({
    base: true,
    md: false,
  });
  const { data, refetch } = trpc.map.all.useQuery({
    typeFilter: [],
  });
  const trpcUtils = trpc.useUtils();

  const onCloseComplete = () => {
    if (currentLocation instanceof Marker) map.removeLayer(currentLocation);
    setCurrentLocation(null);
    refetch();
    router.refresh();
  };

  const onMapClick = async (event: LeafletMouseEvent) => {
    const { isAuthenticated } =
      await trpcUtils.auth.checkAuthenticated.ensureData(undefined, {
        staleTime: 360000,
      });

    if (!isAuthenticated) {
      toastWarning({ title: 'Warning', description: 'You must connect first' });
      return;
    }

    const tempMarker = marker(event.latlng, { icon: ICONS['DEFAULT'] });
    map.addLayer(tempMarker);
    map.flyTo(event.latlng, Math.max(map.getZoom(), 15), {
      animate: true,
      duration: 1.5,
    });
    onOpen();

    setCurrentLocation(tempMarker);
  };

  useOnMapClick(map, onMapClick);

  return (
    <>
      {data?.locations.map((item) => {
        return (
          <Location
            key={`${item.id}`}
            position={[item.latitude, item.longitude]}
            icon={ICONS[item.type[0]]}
            clickHandler={() => {
              setCurrentLocation(item);
              map.flyTo(
                [item.latitude, item.longitude],
                Math.max(map.getZoom(), 15),
                {
                  animate: true,
                  duration: 1,
                }
              );
              console.log(item);
            }}
          >
            <LocationPopUp item={item} />
          </Location>
        );
      })}
      {showOnBottom && (
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="bottom"
          onCloseComplete={onCloseComplete}
        >
          <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
          <DrawerContent height="80vh">
            <DrawerCloseButton />
            <DrawerHeader>Add a new climbing spot</DrawerHeader>

            <LocationForm />
          </DrawerContent>
        </Drawer>
      )}

      {!showOnBottom && (
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          size="md"
          onCloseComplete={onCloseComplete}
        >
          <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
          <DrawerContent width="30rem">
            <DrawerCloseButton />
            <DrawerHeader>Add a new climbing spot</DrawerHeader>
            <LocationForm />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default MapContent;
