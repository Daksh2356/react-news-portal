import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col min-w-max lg:flex-row justify-between bg-blue-500 border-b-2 border-black hover:bg-blue-700">
    {/* Logo and Branding */}
    <Link
      to={"/"}
      className="flex items-center justify-center lg:justify-start p-4 lg:p-6 text-white bg-black"
    >
      NEWS PORTAL
    </Link>
      <div className="flex p-6 gap-11">
        <Link to="/" className="flex items-center cursor-pointer"> HOME </Link>
        <Link to="/favorites" className="flex items-center cursor-pointer"> FAVORITES </Link>
        <div className="flex items-center cursor-pointer"> BUSINESS </div>
        <div className="flex items-center cursor-pointer"> ENTERTAINMENT </div>
        <div className="flex items-center cursor-pointer"> SPORTS </div>
      </div>
    </div>
  );
};

export default Navbar;
