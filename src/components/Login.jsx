import React, { useState } from "react";
import { useDispatch } from "react-redux";

// component
import Header from "./Header";

// firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// utils reducers
import { auth } from "../utils/firebase";
import { checkValidateData } from "../utils/validate";
import { addUser } from "../utils/userSlice";

// constants
import { bgImg, photoUrl } from "../constants";
/**
 * login and signup form with firebase api authentication
 */
const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  function toggleSignInForm() {
    setSignIn((prev) => !prev);
  }

  function handleButtonClick() {
    // check validation
    const error = checkValidateData(fullName, email, password, isSignIn);
    setError(error);
    if (error) return; // no need to go ahead

    // create new user sign in /sign up
    if (!isSignIn) {
      // signup login
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName,
            photoURL: photoUrl,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  }
  return (
    <div className="relative ">
      <img className="absolute" alt="bgImg" src={bgImg} />
      <Header />
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className="absolute right-0 left-0 top-28 flex items-center px-20 flex-col bg-black mx-auto max-w-lg text-white py-20 rounded"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-700 w-full"
        />

        <input
          // type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 w-full"
        />
        <p className="text-red-600">{error}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 rounded-md m-4 cursor-pointer bg-red-500 text-white w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to NetFlix? Sign Up Now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
