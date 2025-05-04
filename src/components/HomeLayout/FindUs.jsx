import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us On</h1>

      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item p-10">
            <FaFacebook size={20} /> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item p-10">
            <FaTwitter size={20} /> Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item p-10">
            <FaInstagram size={20} /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
