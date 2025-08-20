import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  function toggleSignInForm() {
    setSignIn((prev) => !prev);
  }

  return (
    <div className="relative">
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
      />
      <Header />
      <form className="absolute right-0 left-0 top-10 flex items-center flex-col bg-black mx-auto max-w-xl text-white py-10 opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-700 w-xs "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-700 w-xs "
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 w-xs"
        />

        <button className="p-2 rounded-md m-4 bg-red-500 text-white w-xs">
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
