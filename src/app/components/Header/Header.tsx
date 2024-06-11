import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky shadow-sm top-0 right-0 left-0 max-h-[100px] z-50 bg-white w-full shadow-b-md">
      <div className="flex  max-w-[1200px] m-auto justify-between items-center h-full py-5 px-5">
        <Logo />
        <input
          type="text"
          placeholder="Search"
          className="input w-full max-w-xs bg-transparent border-2 border-gray-100"
        />

        <p className=" text-blue-500 underline-none font-semibold cursor-pointer">
          Login
        </p>
      </div>
    </div>
  );
};

export default Header;
