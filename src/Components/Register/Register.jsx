import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update profile with actual values
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            e.target.reset();
            setSuccess("Account created successfully! Please log in now.");

            // Sign out after registration
            signOut(auth)
              .then(() => {
                window.location.href = "/auth/login";
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="PhotoURL"
              name="photo"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />

            <label className="label">Password</label>

            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            <h2 className="text-center mt-3 text-[14px]">
              Already Have An Account?{" "}
              <a className="text-red-400 underline" href="/auth/login">
                Log In
              </a>
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
