import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold ">Login With</h2>
      <div className="flex flex-col mt-5 gap-3">
        <button className="btn btn-primary btn-outline ">
          <FcGoogle size={18}></FcGoogle> Login With Google
        </button>
        <button className="btn btn-success btn-outline ">
          <FaGithub size={18}></FaGithub> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
