import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const AosAnimation = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    Aos.refresh();
  }, []);
  return null;
};

export default AosAnimation;
