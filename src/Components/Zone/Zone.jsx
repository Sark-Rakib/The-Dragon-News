import React from "react";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import swmingImg from "../../assets/swimming.png";

const Zone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-semibold">Q-Zone</h2>
      <div className="flex flex-col">
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
        <img src={swmingImg} alt="" />
      </div>
    </div>
  );
};

export default Zone;
