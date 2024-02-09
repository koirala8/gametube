import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios only once

const Main = () => {
  const [games, setGames] = useState([]);
  const game = games[Math.floor(Math.random() * games.length)];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
          params: {
            tag: "3d.mmorpg.fantasy.pvp",
            platform: "pc",
          },
          headers: {
            "X-RapidAPI-Key":
              "4e855e2bc5msh6ece27c36d601a2p1d6c24jsnafa9b002b809",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run the effect only once
  
  const truncateString = (str, num) => {
    if (str?.length > num){
        return str.slice(0, num) + '...'
    }
    else{
        return str;
    }
  }
  return (
    <div className="w-full h-[600px]">
        <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
      <img
        className="h-[600px] w-full object-cover"
        src={game?.thumbnail}
        alt={game?.title}
      />
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-white text-3xl md:text-5xl font-bold">{game?.title}</h1>
        <div className="my-4">
            <button className="border bg-zinc-400 text-black border-gray-300 py-2 px-5 rounded-md">Play</button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 rounded-md">Play Later</button>
        </div>
        <p className="text-white text-sm">Released: {game?.release_date}</p>
        <p className="text-white w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%]">Overview: {truncateString(game?.short_description, 150)}</p>
      </div>
      
      </div>
    </div>
  );
};

export default Main;
