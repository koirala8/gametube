import React, { useState, useEffect } from "react";
import { Games } from "./Games";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

<<<<<<< HEAD
export const Row = ({ getData, title, rowId }) => {
  const [games, setGames] = useState([]);
=======
export const Row = ({  getData }) => {
  const [games, setGames] = useState([]);
  const [pcGames, setPcGames] = useState([]);
  
>>>>>>> 1a5255e4940eab4c8439072b410e397354fefe91

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for all platforms
        const gameData = await getData();
        setGames(gameData);
<<<<<<< HEAD
=======

        // Fetch data for PC platform
        const pcData = await getData('pc');
        setPcGames(pcData);

       
>>>>>>> 1a5255e4940eab4c8439072b410e397354fefe91
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getData]);

<<<<<<< HEAD
  let timeout;

  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft -= 500; // Adjust scroll speed as needed
    timeout = setTimeout(slideLeft, 500); // Recursive call for continuous scrolling
  };

  const slideRight = () => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft += 500; // Adjust scroll speed as needed
    timeout = setTimeout(slideRight, 500); // Recursive call for continuous scrolling
  };

  const stopScroll = () => {
    clearTimeout(timeout); // Clear the timeout when mouse button is released
  };

  return (
    <>
      <h2 className="p-4 font-bold text-black md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          onMouseDown={slideLeft}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
        />
        <div id={"slider" + rowId} className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {games.map((item, id) => (
            <Games item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          onMouseDown={slideRight}
          onMouseUp={stopScroll}
          onMouseLeave={stopScroll}
        />
      </div>
    </>
=======
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
>>>>>>> 1a5255e4940eab4c8439072b410e397354fefe91
  );
};
