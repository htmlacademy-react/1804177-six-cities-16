import MainScreen from '../main-screen/main-screen.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Offers} from '../../offers.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import Login from '../login/login.tsx';
import Favorites from '../favorites/favorites.tsx';
import Offer from '../offer/offer.tsx';
import NotFound from '../../components/not-found.tsx';
import PrivateRoute from '../../components/private-route.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen dataOffers={Offers}/>}
        >
        </Route>
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        >
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites dataOffers={Offers}/>
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path={AppRoute.Offer}
          element={<Offer dataOffers={Offers}/>}
        >
        </Route>
        <Route
          path='*'
          element={<NotFound/>}
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
