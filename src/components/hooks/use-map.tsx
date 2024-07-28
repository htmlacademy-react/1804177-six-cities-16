import leaflet, { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect, useState, MutableRefObject} from 'react';
import {TileLayer} from '../../const.ts';

type City = {
  latitude: number;
  longitude: number;
  zoom: number;
};

function useMap(mapRef: MutableRefObject<HTMLDivElement | null>, city: City): LeafletMap | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          TileLayer.UrlPattern,
          {
            attribution: TileLayer.Attribution,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
