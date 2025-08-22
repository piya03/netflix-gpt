import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

//component
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
    { path: "/error", element: <ErrorPage /> },
  ]);

  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
};

export default Body;
