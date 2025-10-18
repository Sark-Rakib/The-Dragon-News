import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img src={user} alt="" />
        <button className="bg-black text-amber-50 font-semibold px-3 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
