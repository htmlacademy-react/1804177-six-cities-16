import {Link} from 'react-router-dom';
import {AppRoute} from '../const.ts';
import {capitalizeFirstLetter} from '../utils.ts';

export type City = {
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

function Card({data, onHandlerChangeIdActiveCard, onHandlerRemoveIdActiveCard, type}: {
  data: CardProps;
  onHandlerChangeIdActiveCard?: () => void;
  onHandlerRemoveIdActiveCard?: () => void;
  type?: 'favorites' | 'near-places';
}): JSX.Element {
  const imgWidth: string = type === 'favorites' ? '150' : '260';
  const imgHeight: string = type === 'favorites' ? '110' : '200';

  return (
    <article
      className={`${type === 'favorites' ? 'favorites' : 'near-places'}__card place-card`}
      onMouseEnter={onHandlerChangeIdActiveCard && onHandlerChangeIdActiveCard}
      onMouseLeave={onHandlerRemoveIdActiveCard && onHandlerRemoveIdActiveCard}
    >
      <Link to={`${AppRoute.OfferStatic}/${data.id}`}>
        {data.isPremium
          ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          :
          null}
        <div className={`${type === 'favorites' ? 'favorites' : 'near-places'}__image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={data.previewImage} width={imgWidth} height={imgHeight}
              alt="Place image"
            />
          </a>
        </div>
      </Link>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${data.isFavorite ? 'place-card__bookmark-button--active' : null}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{data.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OfferStatic}/${data.id}`}>{data.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(data.type)}</p>
      </div>
    </article>
  );
}

export default Card;
