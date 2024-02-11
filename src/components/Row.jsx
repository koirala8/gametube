import React from "react";
import { useState, useEffect } from "react";
import { Games } from "./Games";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

export const Row = ({  getData, title, rowId}) => {
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

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (    
      <>
        <h2 className="p-4 font-bold text-black md:text-xl">{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft size={40} className="absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"  onClick={slideLeft}/>
          <div id={"slider" + rowId} className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">

            {games.map((item, id) => (
              <Games item={item} key={id}/>
            ))}
          </div>
              <MdChevronRight size={40} className="absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block" onClick={slideRight}/>
        </div>
      </>
  );
};
