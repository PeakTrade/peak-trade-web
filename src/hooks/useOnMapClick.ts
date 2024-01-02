import { useEffect } from 'react';

import { LeafletMouseEvent, Map } from 'leaflet';

const useOnMapClick = (
  map: Map,
  handler: (event: LeafletMouseEvent) => void
) => {
  useEffect(() => {
    map.addEventListener('click', handler);
    return () => {
      map.removeEventListener('click', handler);
    };
  }, [map, handler]);
};

export default useOnMapClick;
