import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppScreenProps = {
  NumberOffers: number;
}

function App({NumberOffers}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      NumberOffers = {NumberOffers}
    />
  );
}

export default App;
