import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("🚀 ~ Header ~ user:", user);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black ">
      <img
        className="w-44"
        alt="logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

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
