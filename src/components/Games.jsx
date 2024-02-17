import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Games = ({ item, id }) => {
    const [like, setLike] = useState(false);
  
    return (
      <div
        key={id}
        className="w-[160px] sm:w-[200px] md:w-[240px] ml-6 lg:w-[280px] inline-block cursor-pointer p-2 relative"
      >
        <div className="relative">
          <img
            className="block w-full h-auto"
            src={item?.thumbnail}
            alt={item?.title}
          />
          <div className="absolute top-0 left-0 w-full h-full text-black opacity-0 hover:bg-black/50 hover:opacity-100">
            <p className="flex items-center justify-center h-full text-xs font-bold text-center text-white white-space-normal md:text-sm">
              {item?.title}
            </p>
            <p>
              {like ? (
                <FaHeart className="absolute text-gray-300 top-4 left-4" />
              ) : (
                <FaRegHeart className="absolute text-gray-300 top-4 left-4" />
              )}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
