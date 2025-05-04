import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const fullDate = new Date();
  const dayName = format(fullDate, "EEEE");
  const restOfDate = format(fullDate, "MMMM dd, yyyy");
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img src={logo} alt="" />
      <p className="text-lg text-accent">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium text-accent">
        <span className="text-primary">{dayName} </span>
        {restOfDate}
      </p>
    </div>
  );
};

export default Header;
