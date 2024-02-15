import React from "react";
import { useState, useEffect } from "react";

export const Row = ({ getData }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for all platforms
        const gameData = await getData();
        setGames(gameData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getData]);

  return (
    <div className="relative items-center p-2">
      <div id="slider">
        <ul className="flex flex-row gap-4 overflow-x-auto p-0 m-0">
          {games.map((item, id) => (
            <li key={id} className="relative cursor-pointer p-2">
              <div className="w-[160px] sm:w-[200px] md:w-[240px] ml-6 lg:w-[280px] relative">
                <img className="w-full h-full block" src={item?.thumbnail} alt={item?.title} />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center h-full text-center items-center">{item?.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
