import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;

// TODO: to make dropdown transition up and down as same to netlfix site
// TODO: make loader when signin/signup on button
// TODO: NOT TO SHOW EVEN BLINK OF HOME PAGE ALSO HERE IF GOING TO "/" PAGE
