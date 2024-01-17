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

// like App.js we used to run from index.js toh indeex.html mein
// <head>
// <title>
// <body> == so we ll create here Body comp (run here)

// for store setup :-
// 1. intalled redxtoolkit and react-redux
// 2. setup appStore
// created userslice
// added user reduxer to appstore
// finally , adding the appstore(binding it to the app) , at inital state here
// check fro mredxu dev tools :- user : null


// TODO: to restrict routing to /browse if no user there or if user has not signed in
//  TODO: to make dropdown transition up and down as same to netlfix site
