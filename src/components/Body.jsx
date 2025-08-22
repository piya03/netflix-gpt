import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Browse from "./Browse";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("🚀 ~ Body ~ user:", user);
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
  ]);
  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
};

export default Body;
