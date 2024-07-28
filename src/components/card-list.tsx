import Card, {CardProps} from './card.tsx';

type CardListProps = {
  dataOffers: CardProps[];
  onHover?: (id?: string) => void;
};

function CardList({ dataOffers, onHover }: CardListProps): JSX.Element {

  const changeIdActiveCard = (id: string): void => {
    if (onHover) {
      onHover(id);
    }
  };

  const removeIdActiveCard = (): void => {
    if (onHover) {
      onHover();
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {dataOffers.map((dataOffer: CardProps) => (
        <Card
          key={dataOffer.id}
          data={dataOffer}
          onHandlerChangeIdActiveCard={() => changeIdActiveCard(dataOffer.id)}
          onHandlerRemoveIdActiveCard={removeIdActiveCard}
        />
      ))}
    </div>
  );
}

export default CardList;
