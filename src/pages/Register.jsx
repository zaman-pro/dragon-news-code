import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl font-semibold text-center text-primary">
          Register your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-semibold">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            {/* Photo URL */}
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
            />

            {/* email */}
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />

            {/* password */}
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />

            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accept <span className="font-semibold">Terms & Conditions</span>
            </label>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>

          <p className="font-semibold text-center text-accent">
            Already Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
