import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppScreenProps = {
  numberOffers: number;
}

function App({numberOffers}: AppScreenProps): JSX.Element {
  return (
    <MainScreen numberOffers = {numberOffers}/>
  );
}

export default App;
