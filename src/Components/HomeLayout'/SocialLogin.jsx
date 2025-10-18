import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const logInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const logInWithGitHub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold ">Login With</h2>
      <div className="flex flex-col mt-5 gap-3">
        <button
          onClick={logInWithGoogle}
          className="btn btn-primary btn-outline "
        >
          <FcGoogle size={18}></FcGoogle> Login With Google
        </button>
        <button
          onClick={logInWithGitHub}
          className="btn btn-success btn-outline "
        >
          <FaGithub size={18}></FaGithub> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
