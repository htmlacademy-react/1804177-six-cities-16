import {CardProps} from '../../components/card.tsx';
import Layout from '../../components/layout.tsx';
import CardList from '../../components/card-list.tsx';
import {useState} from 'react';
import Map from '../../components/map.tsx';
import {City} from '../../mock/city.tsx';
import LocationList from './components/location-list.tsx';

type MainScreenProps = {
  dataOffers: CardProps[];
}

function MainScreen({dataOffers}: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<CardProps | null>(null);
  const handleCardHover = (id?: string): void => {
    const CurrentCard = dataOffers.find((dataOffer) => dataOffer.id === id) || null;
    setActiveCard(CurrentCard);
  };

  return (
    <div className="page page--gray page--main">
      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{dataOffers.length} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <CardList dataOffers={dataOffers} onHover={handleCardHover}/>
              </section>
              <div className="cities__right-section">
                <Map baseClassName="cities" dataOffers={dataOffers} activeCard={activeCard} city={City[0]}/>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default MainScreen;
