import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

// firebase
import { signOut, onAuthStateChanged } from "firebase/auth";

// utils
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

// utils
import { addUser, removeUser } from "../utils/userSlice";

//constants
import { netFlixLogo } from "../constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // logout logic using firebase api
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  //Get the currently signed-in user on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("🚀 ~ Header ~ user:", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe whenever component is unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" alt="logo" src={netFlixLogo} />

      {user && (
        <div className="flex p-2 cursor-pointer">
          <img alt="userIcon" className="w-12 h-12" src={user.photoURL} />
          <button
            onClick={handleSignOut}
            className="cursor-pointer text-white font-bold"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
