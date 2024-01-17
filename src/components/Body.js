import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const auth = getAuth();

const Body = () => {
  const dispatch = useDispatch();

  // THIS API IS CALLED WHENEVER THE USER SIGNIN, SIGNUP, SIGN OUT:- WHENEEVER THERE IS AN AUTHETICATION STATE CHANGE
  // THIS IS KIND OF EVENT LISTENCER : IF THE USER WILL SIGN IN , SGNUP ETC
  // TO HANDLE EVERYTING ON AUTHSTATR CHANGE:- SINGIN/SIGNUP : ADDUSER (TO STORE) ETC

  // not to call this fxn API again and angain, to call it only once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        console.log({ user });
        // add the user in store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        console.log("user is signed out");
        // remove the user form store
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default Body;

// in App ki body mein toh
// we ll have the pages :- ek login page and then borwse netflix's page

// root level here main is body so, to get current user

// as soon as my user sign in or sign up :- need to update user slice with that user info
// so we will disopatch a action in createuserwithEmailpass / signinwithuser.... and also in
// signout :- so rather that dispatchign action from mulitple places
// WE ll use firebase utilty :- onAuthStateChanged .

// not to call this fxn API again and angain, to call it only once as aar hum bs fxn call krte yhaan
// then it ll run always ,
// we used useeffect, coz we need to setup this event listent for once
