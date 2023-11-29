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

// in App ki body mein toh
// we ll have the pages :- ek login page and then borwse netflix's page
