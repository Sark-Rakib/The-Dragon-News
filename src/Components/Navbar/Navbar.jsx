import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";

const Navbar = () => {
  const { user } = useContext(AuthContext); // ✅ Context থেকে user নেওয়া

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-between items-center relative">
      <h2 className="mt-17 md:mt-5 absolute text-yellow-300 bg-base-200 rounded p-1">
        {user && user.email}
      </h2>
      <div></div>

      <div className="flex gap-5 text-accent">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Career
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={user && user.photoURL ? user.photoURL : userIcon}
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />

        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-black text-amber-50 font-semibold px-3 py-2 rounded"
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="bg-black text-amber-50 font-semibold px-3 py-2 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
