import {CardProps} from './components/card.tsx';

export const capitalizeFirstLetter = (word: string): string => word[0].toUpperCase() + word.slice(1);

type OffersByCityType = {
  [key: string]: CardProps[];
}

export const getOfferCardByCity = (dataOffers: CardProps[]) => {
  const cardByCity: OffersByCityType = {};

  for (const card of dataOffers) {
    if (!cardByCity[card.city.name]) {
      cardByCity[card.city.name] = [];
    }

    cardByCity[card.city.name].push(card);
  }

  return cardByCity;
};

export const getBedroomsCount = (count: number): string => `${count} Bedroom${count > 1 ? 's' : ''}`;
export const getAdultsCount = (count: number): string => `Max ${count} adult${count > 1 ? 's' : ''}`;
