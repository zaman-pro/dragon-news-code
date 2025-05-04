import React from "react";
import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";
import bg from "../assets/bg.png";

const Qzone = () => {
  return (
    <div className="space-y-5">
      <div className="bg-base-200 p-3">
        <h1 className="font-bold mb-5 ">Q-Zone</h1>
        <div className="space-y-5 flex flex-col items-center">
          <img src={swimmingImg} alt="" />
          <img src={classImg} alt="" />
          <img src={playGround} alt="" />
        </div>
      </div>
      <div>
        <img className="w-full" src={bg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
