import React, { useState } from "react";
import Header from "./Header";

//util
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  console.log("🚀 ~ Login ~ error:", error);

  function toggleSignInForm() {
    setSignIn((prev) => !prev);
  }

  function handleButtonClick() {
    // check validation
    const error = checkValidateData(fullName, email, password);
    console.log("🚀 ~ handleButtonClick ~ error:", error);
    setError(error);
  }
  return (
    <div className="relative">
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
      />
      <Header />
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
        className="absolute right-0 left-0 top-10 flex items-center px-20 flex-col bg-black mx-auto max-w-lg text-white py-20 rounded opacity-80"
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
          type="password"
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
