import Layout from '../../components/layout.tsx';
import {useParams} from 'react-router-dom';
import NotFound from '../../components/not-found.tsx';
import OfferContainer from './component/offer-container.tsx';
import NearPlaces from './component/near-places.tsx';
import {getNearOfferCardById, getOfferById} from '../../utils.ts';

function Offer(): JSX.Element {
  const {id: offerId} = useParams();
  const currentOffer = getOfferById(offerId);
  const nearOfferCards = getNearOfferCardById(offerId);

  if (!currentOffer) {
    return <NotFound/>;
  }

  return (
    <div className="page">
      <Layout>
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {currentOffer.images.map((image: string) => (
                  <div className="offer__image-wrapper" key={currentOffer.id + currentOffer.price}>
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                )
                )}
              </div>
            </div>
            <OfferContainer currentOffer={currentOffer}/>
            <section className="offer__map map"/>
          </section>
          <div className="container">
            <NearPlaces nearOfferCards={nearOfferCards}/>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Offer;
