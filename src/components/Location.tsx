import { FC } from 'react';

import Marker, { MarkerProps } from '@/components/Marker';
import Popup from '@/components/Popup';

export type LocationProps = MarkerProps;

const Location: FC<LocationProps> = ({ children, ...props }) => {
  const { position, id, icon, ...rest } = props;
  return (
    <Marker position={position} icon={icon} {...rest} id={id}>
      <Popup>{children}</Popup>
    </Marker>
  );
};

export default Location;
