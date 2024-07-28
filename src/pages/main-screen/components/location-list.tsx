import {CITIES} from '../../../const.ts';

function LocationList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city.length}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{city}</span>
          </a>
        </li>
      )
      )}
    </ul>
  );
}

export default LocationList;
