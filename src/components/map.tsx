import leaflet, {layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../hooks/use-map.tsx';
import {Markers} from '../const.ts';
import {OffersTypes} from '../types/types.tsx';

type MapProps = {
  baseClassName: string;
  activeCard?: OffersTypes | null;
  cityOffers: OffersTypes[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: Markers.Default,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: Markers.Current,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({baseClassName = 'cities', activeCard, cityOffers}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, cityOffers[0]?.city.location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        }, {
          icon: activeCard && activeCard.id === offer.id ? currentCustomIcon : defaultCustomIcon,
        });

        marker
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffers, activeCard]);

  return (
    <section className={`${baseClassName}__map map`} style={{height: `${baseClassName === 'cities' ? '100%' : '50vh'}`}} ref={mapRef}/>
  );
}

export default Map;

