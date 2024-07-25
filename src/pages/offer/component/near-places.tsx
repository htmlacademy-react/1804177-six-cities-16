import Card, {CardProps} from '../../../components/card.tsx';

type NearPlacesProps = {
  nearOfferCards: CardProps[];
}

function NearPlaces({nearOfferCards}: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {nearOfferCards.map((item: CardProps) =>
          <Card key={item.id} data={item} type={'near-places'}/>)}
      </div>
    </section>
  );
}

export default NearPlaces;
