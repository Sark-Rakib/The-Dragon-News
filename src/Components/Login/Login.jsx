import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase.init";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const haldleLogIn = (e) => {
    e.preventDefault();
    // console.log("login");
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center">Login Your Account</h2>
        <form onSubmit={haldleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            {error && (
              <p className="text-red-400 text-center">
                Invalid Email or Password
              </p>
            )}
            <h2 className="text-center mt-3 text-[14px]">
              Don't Have An Account ?{" "}
              <Link className="text-red-400" to="/auth/register">
                Register
              </Link>{" "}
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
