import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;

// when we are trying to access out browse page :- we are not checking our auth here and redirectign it to login pag
// if user is not present
// it can only happen if i ll check my auth on browse page
// we have the code for checking auth is already written in Body comp , WHNEVER THIS PAGE IE BODY LOADS :- []
// THIS EVENT LISTENER onAuthStateChanged listenet is loaded , each time the comp is rendered
// it is checking the auth of the user
// the ideal way is whenver th user is logged in (or user ispasssed) we should redirect from here only
// we have this event list kind ofthign , we are checking the auth everytime the page laods  , we are doing this to check auth and settign uo the store
// if the user lgged in it ll update the store, if user logged out :- it ll empty the sotre
// but tihs place iswhere we should add navigate
// but problem isthere, routing is happning insde the boy comp :- so whenver i ll have to navigate :- to navigate insde the body
// ie in its children comp's (in appRouter routes :- it ll work in login or children of login and smae for browse etc )

// we ll have ot add this useeffect to a place which i there is my whole app  but it is also in my roter provider (in a central palce whcih is always there)

// here best place is Header comp :- whether its borswe page or login page :- header ll be always there

// when using strings : -always use constants

// when making for mob css :- always oen one tab of web and other for mob 