import React from "react";
import Marquee from "react-fast-marquee";

const Lastest = () => {
  return (
    <div className="flex items-center bg-base-300">
      <p className="font-semibold bg-red-400 px-3 py-2 text-white">Lastest</p>
      <Marquee
        className="bg-gradient-to-b from-pink-300 via-orange-400 to-yellow-300  font-medium "
        pauseOnHover={true}
      >
        <p className="font-bold">
          📰 Heavy rainfall causes severe waterlogging in Chittagong city | 🚗
          Traffic disruptions continue in Dhaka due to heavy rain | 🧑‍💼
          Government announces new digital policy for local news outlets | 🌦️
          Meteorological department warns of further rainfall across coastal
          regions | ⚡ Power outage hits several districts after overnight
          storms | 🧠 Dragon News launches new AI-powered recommendation
          feature!
        </p>
      </Marquee>
    </div>
  );
};

export default Lastest;
