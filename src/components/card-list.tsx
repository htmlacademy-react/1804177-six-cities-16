import Card, {CardProps} from './card.tsx';
import {useState} from 'react';

function CardList({dataOffers}: { dataOffers: CardProps[] }): JSX.Element {
  const [, setActiveCard] = useState<undefined | string>(undefined);
  const changeIdActiveCard = (id: string): void => {
    setActiveCard(id);
  };

  const removeIdActiveCard = (): void => {
    setActiveCard(undefined);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {dataOffers.map((item: CardProps) => (
        <Card
          onHandlerChangeIdActiveCard={() => changeIdActiveCard(item.id)}
          onHandlerRemoveIdActiveCard={removeIdActiveCard}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
}

export default CardList;
