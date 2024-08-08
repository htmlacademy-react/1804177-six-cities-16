import {CardProps} from './components/card.tsx';
import {Offers} from './mock/offers.ts';

export const capitalizeFirstLetter = (word: string): string => word[0].toUpperCase() + word.slice(1);

type OffersByCityType = {
  [key: string]: CardProps[];
}

export const getOfferCardByCity = (offers: CardProps[]) => {
  const cardByCity: OffersByCityType = {};

  for (const card of offers) {
    if (!cardByCity[card.city.name]) {
      cardByCity[card.city.name] = [];
    }

    cardByCity[card.city.name].push(card);
  }

  return cardByCity;
};

export const getFavotiteOfferCard = Offers.filter((offerCard: CardProps) => offerCard.isFavorite);
export const getOfferById = (offerId: string | undefined) => Offers.find((offer: CardProps): boolean => offer.id === offerId);
export const getNearOfferCardById = (offerId: string | undefined) => Offers.filter((offer: CardProps): boolean => offer.id !== offerId).slice(0, 3);

export const getBedroomsCount = (count: number): string => `${count} Bedroom${count > 1 ? 's' : ''}`;
export const getAdultsCount = (count: number): string => `Max ${count} adult${count > 1 ? 's' : ''}`;
