import axios from "axios"; // Import axios only once



    const FetchData = async () => {
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
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };





export default FetchData;
