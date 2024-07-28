import leaflet, {LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Marker} from '../const.ts';
import useMap from './hooks/use-map.tsx';
import {CardProps} from './card.tsx';

type MapProps = {
  baseClassName: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  dataOffers: CardProps[];
  activeCard?: CardProps | null;
}

function Map({baseClassName = 'cities', city, dataOffers, activeCard}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city.location);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  const defaultCustomIcon = leaflet.icon({
    iconUrl: Marker.Default,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: Marker.Current,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map && dataOffers) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map, dataOffers]);

  useEffect(() => {
    if (map) {
      markerLayer.current.clearLayers();
      dataOffers.forEach((dataOffer) => {
        leaflet
          .marker({
            lat: dataOffer.location.latitude,
            lng: dataOffer.location.longitude,
          }, {
            icon: activeCard && activeCard.id === dataOffer.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markerLayer.current);
      });
      markerLayer.current.addTo(map);
    }
  }, [map, dataOffers, activeCard, currentCustomIcon, defaultCustomIcon]);

  return (
    <section className={`${baseClassName}__map map`} style={{ height: '500px' }} ref={mapRef}></section>
  );
}

export default Map;

