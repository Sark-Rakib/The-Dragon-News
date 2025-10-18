import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "../FindUs/FindUs";
import Zone from "../Zone/Zone";
import Background from "../Background/Background";

const RightAside = () => {
  return (
    <div className="space-y-7">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Zone></Zone>
      <Background></Background>
    </div>
  );
};

export default RightAside;
