import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-3 py-3 z-[100] absolute w-full">
      <div className="bg-red w-[102px]">
        <h1 className="text-white text-4xl bg-red-500 border rounded-md px-0.5 font-bold">GAMETUBE</h1>
      </div>
      <div>
        <button className="bg-red-600 border rounded-md p-2 text-white">Sign Up</button>
        <button className="pl-4 ml-2 bg-red-600 border rounded-md p-2 text-white">Log In</button>
      </div>
    </div>
  );
};
