import { circle, marker } from 'leaflet';
import { useMap } from 'react-leaflet';

import { ButtonControl } from '@/components/ButtonControl';

import { ICONS } from './config';

const ButtonControlGroup = () => {
  const map = useMap();
  const centerOnUserLocation = () => {
    map.locate().on('locationfound', (event) => {
      const radius = event.accuracy / 4;

      const userMarker = marker(event.latlng, { icon: ICONS['CURRENT_LOC'] });
      userMarker.addTo(map);
      userMarker.bindPopup('You are here', { autoClose: true }).openPopup();
      map.flyTo(event.latlng, 15, { animate: true, duration: 1.5 });
      circle(event.latlng, radius).addTo(map);
    });
  };

  return (
    <>
      <ButtonControl
        aria-label="Go to your position"
        handler={centerOnUserLocation}
      />
    </>
  );
};

export default ButtonControlGroup;
