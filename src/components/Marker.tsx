import { FC } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';
import { LeafletMouseEventHandlerFn } from 'leaflet';
import { Marker as LeafletMarker } from 'react-leaflet';
import type { MarkerProps as LeafletMarkerProps } from 'react-leaflet';

export type MarkerProps = Overwrite<BoxProps, LeafletMarkerProps> & {
  clickHandler: LeafletMouseEventHandlerFn;
};

const Marker: FC<MarkerProps> = ({
  id,
  position,
  children,
  icon,
  clickHandler,
  ...props
}) => (
  <Box id={id} {...props}>
    <LeafletMarker
      position={position}
      icon={icon}
      eventHandlers={{
        click: clickHandler,
      }}
    >
      {children}
    </LeafletMarker>
  </Box>
);

export default Marker;
