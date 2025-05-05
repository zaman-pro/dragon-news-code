import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-2xl font-semibold text-center text-primary">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-semibold">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URL */}
            <label className="label font-semibold">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Enter your photo url"
              required
            />
            {/* email */}
            <label className="label font-semibold">Email</label>
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
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accept <span className="font-semibold">Terms & Conditions</span>
            </label>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>

          <p className="font-semibold text-center text-accent">
            Already Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
