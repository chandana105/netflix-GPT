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

// TODO: to restrict routing to /browse if no user there or if user has not signed in (i.e half done, but on refresh ut shown blink of login page on browse page to fix that )
//  TODO: to make dropdown transition up and down as same to netlfix site


