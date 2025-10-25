import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex justify-cente flex-col items-center gap-3 mt-5">
      <img className="px-2" src={logo} alt="" />
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE,MMMM dd, yyyy,")}
        <br />
        <p className="text-center"> {format(time, "hh:mm:ss a")}</p>
      </p>
    </div>
  );
};

export default Header;
