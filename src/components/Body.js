import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";

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

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const { uid, email } = user;
    console.log({ uid, email });
    // add the user in store
  } else {
    console.log("user is signed out");
    // remove the user form store
  }
});

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;

// in App ki body mein toh
// we ll have the pages :- ek login page and then borwse netflix's page

// root level here main is body so, to get current user
