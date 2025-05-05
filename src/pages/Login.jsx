import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { login } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setError(errorCode);
      });

    console.log("Login Successfull!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl font-semibold text-center text-primary">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label font-semibold">Email address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your email address"
              required
            />
            {/* password */}
            <label className="label font-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-secondary text-sm">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="font-semibold text-center text-accent">
            Dont't Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
