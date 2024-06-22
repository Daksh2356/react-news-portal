import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col min-w-max lg:flex-row justify-between bg-blue-200 border-b-2 border-black">
    {/* Logo and Branding */}
    <Link
      to={"/"}
      className="flex items-center justify-center lg:justify-start p-4 lg:p-6 text-white bg-black"
    >
      NEWS PORTAL
    </Link>
      <div className="flex p-6 gap-11">
        <div className="flex items-center cursor-pointer"> HOME </div>
        <div className="flex items-center cursor-pointer"> SPORTS </div>
        <div className="flex items-center cursor-pointer"> ENTERTAINMENT </div>
        <div className="flex items-center cursor-pointer"> NATIONAL </div>
        <div className="flex items-center cursor-pointer"> INTERNATIONAL </div>
      </div>
    </div>
  );
};

export default Navbar;
