import MainScreen from '../main-screen/main-screen.tsx';
import {DATA} from "../../data.ts";

function App(): JSX.Element {
  return (
    <MainScreen dataOffers={DATA}/>
  );
}

export default App;
