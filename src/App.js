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


// when u deply ur code, u ll keep this env configuration , we ll set the envireonment var's wherever we are hosting the app
// suppose hostign the app on server , get these .env environent var's pushed over there
// every platform, every hosting platform , will have its own way of adding env var's
// styms its paid
// if to use this secret key of firbase its paid
// if u have ur own server :- u can set env var's overthere and u can use it proces.env.ur key

// this is secure way
// while every securit y things used to happen form backend
// frontend is not 1000% secure, when u conect backend with it , thne its 1000% secure 

