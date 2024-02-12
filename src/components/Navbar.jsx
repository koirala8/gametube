import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-3 py-3 z-[100] absolute w-full">
      <Link to="/">
      <div className="bg-red w-[105px]">
        <h1 className="text-4xl italic font-bold text-white bg-red-500 border rounded-md">GAMETUBE</h1>
      </div>
      </Link>
      <div>
      <Link to="/signup">
        <button className="p-2 text-white border rounded-md bg-black/40 hover:opacity-80">Sign Up</button></Link>
        <Link to="/login">
        <button className="p-2 pl-4 ml-2 text-white border rounded-md bg-black/40 hover:opacity-80">Log In</button>
        </Link>
      </div>
    </div>
  );
};
