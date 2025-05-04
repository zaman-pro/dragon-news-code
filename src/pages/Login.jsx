import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl font-semibold text-center text-primary">
          Login your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold">Email address</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="font-semibold text-center text-accent">
            Dont't Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
