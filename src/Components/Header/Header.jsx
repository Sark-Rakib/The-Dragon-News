import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-cente flex-col items-center gap-3 mt-5">
      <img src={logo} alt="" />
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE,MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
