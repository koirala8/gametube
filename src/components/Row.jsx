import React, { useState, useEffect } from "react";
import { Games } from "./Games";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Row = ({  getData }) => {
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

  // Render the component


  return (
    <div>
      <>
        <div className="relative flex items-center">
            
          <div id={"slider"}>

            {games.map((item, id) => (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:w-[240px] ml-6 lg:w-[280px] inline-block cursor-pointer p-2"
              >
                <img src={item?.thumbnail} alt={item?.title} />
              </div>
            ))}

            {pcGames.map((item, id) => (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:w-[240px] ml-6 lg:w-[280px] inline-block cursor-pointer p-2"
              >
                <img src={item?.thumbnail} alt={item?.title} />
              </div>
            ))}

            
            
          </div>
        </div>
      </>
    </div>
  );
};
