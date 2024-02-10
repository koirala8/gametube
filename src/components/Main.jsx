import FetchData from "./Api/Gamedata";
import { useState, useEffect } from "react";

const Main = () => {
  const [games, setGames] = useState([]);
  const game = games[Math.floor(Math.random() * games.length)];

    useEffect(()=>{
      const fetchData = async () => {
        const gameData = await FetchData();
        setGames(gameData);
      };
  
      fetchData();
    }, [])
    


  
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

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
          <h1 className="text-3xl font-bold text-white md:text-5xl">{game?.title}</h1>
          <div className="my-4">
            <button className="px-5 py-2 text-black border border-gray-300 rounded-md bg-zinc-400">Play</button>
            <button className="px-5 py-2 ml-4 text-white border border-gray-300 rounded-md">Play Later</button>
          </div>
          <p className="text-sm text-white">Released: {game?.release_date}</p>
          <p className="text-white w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%]">Overview: {truncateString(game?.short_description, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
