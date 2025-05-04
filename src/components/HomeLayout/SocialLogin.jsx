import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Login with</h1>
      <div className="space-y-1">
        {/* Google */}
        <button className="btn btn-ghost w-full border-[#e5e5e5]">
          <FcGoogle size={20} />
          Login with Google
        </button>

        {/* GitHub */}
        <button className="btn btn-ghost w-full border-[#e5e5e5]">
          <FaGithub size={20} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
