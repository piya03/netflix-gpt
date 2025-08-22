import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { useDispatch } from "react-redux";

// firebase
import { onAuthStateChanged } from "firebase/auth";

// utils
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

//component
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();

  //Get the currently signed-in user on mount
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

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
