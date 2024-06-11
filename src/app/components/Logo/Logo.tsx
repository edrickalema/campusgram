import React from "react";
import { PiStudentBold } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="flex items-center ">
      <PiStudentBold className="text-[2em] text-green-600 mr-2" />
      <h1 className="font-bold text-green-600">CAMPUSGRAM</h1>
    </div>
  );
};

export default Logo;
