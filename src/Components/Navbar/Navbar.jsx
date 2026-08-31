import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-300 rounded-full px-4 py-1"
      : "hover:bg-base-200 rounded-full px-4 py-1 transition";

  return (
    <div className="flex justify-between items-center gap-3 flex-wrap">
      {user && (
        <h2 className="text-accent-content bg-accent/10 rounded p-1 text-sm max-w-full truncate">
          {user.email}
        </h2>
      )}

      {/* Desktop nav links */}
      <div className="md:flex gap-4 text-accent-content border rounded-full px-4 py-2 bg-base-100">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/career" className={navLinkClass}>
          Career
        </NavLink>
      </div>

      <div className="flex items-center gap-2 ml-auto md:ml-0">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="hidden md:flex btn btn-ghost btn-circle"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <img
          src={user && user.photoURL ? user.photoURL : userIcon}
          alt="User Profile"
          className="hidden md:flex w-10 h-10 rounded-full"
        />

        {user ? (
          <button
            onClick={handleLogOut}
            className="hidden md:flex bg-base-content text-base-100 font-semibold px-3 py-2 rounded"
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="hidden md:flex bg-base-content text-base-100 font-semibold px-3 py-2 rounded">
              Login
            </button>
          </Link>
        )}

        {/* Mobile menu (DaisyUI dropdown) */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="flex flex-row gap-5 menu dropdown-content z-50 mt-2 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li> */}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="btn btn-ghost btn-circle"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            <img
              src={user && user.photoURL ? user.photoURL : userIcon}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />

            {user ? (
              <button
                onClick={handleLogOut}
                className="bg-base-content text-base-100 font-semibold px-3 py-2 rounded"
              >
                Log Out
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="bg-base-content text-base-100 font-semibold px-3 py-2 rounded">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
