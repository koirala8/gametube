import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
      console.log(email, password);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://www.essentiallysports.com/stories/gaming-news-top-5-games-of-2023-to-play-on-pc/assets/2.jpeg"
          alt="/"
          className="absolute hidden object-cover w-full h-full sm:block"
        />
        <div className="fixed top-0 w-full h-screen bg-black/60 left-o"></div>
        <div className="fixed z-50 w-full px-4 py-24">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl text-white">Create Account</h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full py-4"
              >
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-800 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-800 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="px-1 py-3 my-6 font-bold bg-red-600 rounded">
                  Sign Up
                </button>
                <div className="flex items-center justify-between">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-6">
                  <span>Already subscribed to GameTube</span>{" "}
                  <Link to="/login" className="text-yellow-600">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
