import React from "react";
import Marquee from "react-fast-marquee";

const Lastest = () => {
  return (
    <div className="flex items-center gap-3">
      <p className="font-semibold bg-red-400 px-3 py-2 text-white">Lastest</p>
      <Marquee className="" pauseOnHover={true}>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          illo nisi ipsa ea corporis fugiat ducimus consectetur perspiciatis. In
          hic officiis at dolorem modi esse eos magnam, libero facere
          laudantium?
        </p>
      </Marquee>
    </div>
  );
};

export default Lastest;
