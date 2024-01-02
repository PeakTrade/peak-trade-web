import { FC } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';
import { Marker as LeafletMarker } from 'react-leaflet';
import type { MarkerProps as LeafletMarkerProps } from 'react-leaflet';

export type MarkerProps = Overwrite<BoxProps, LeafletMarkerProps>;

const Marker: FC<MarkerProps> = ({
  id,
  position,
  children,
  icon,
  ...props
}) => (
  <Box id={id} {...props}>
    <LeafletMarker position={position} icon={icon}>
      {children}
    </LeafletMarker>
  </Box>
);

export default Marker;
