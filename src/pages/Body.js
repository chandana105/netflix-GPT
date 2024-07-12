import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <ErrorPage />,
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;
