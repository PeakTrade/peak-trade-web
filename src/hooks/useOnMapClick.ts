import { useEffect } from 'react';

import { LeafletMouseEvent } from 'leaflet';
import { useMap } from 'react-leaflet';

const useOnMapClick = (handler: (event: LeafletMouseEvent) => void) => {
  const map = useMap();
  useEffect(() => {
    map.addEventListener('click', handler);
    return () => {
      map.removeEventListener('click', handler);
    };
  }, [map, handler]);
};

export default useOnMapClick;
