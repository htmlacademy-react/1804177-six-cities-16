import {CITIES} from '../../../const.ts';
import {v4 as uuidv4} from 'uuid';

type LocationListProps = {
  handlerCityClick: (id: string) => void;
  activeCity: string;
}

function LocationList({handlerCityClick, activeCity}: LocationListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={uuidv4()}>
          <button onClick={() => handlerCityClick(city)} className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}>
            <span>{city}</span>
          </button>
        </li>
      )
      )}
    </ul>
  );
}

export default LocationList;
