import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { useLocation } from "react-router-dom";

export const TeamProfile = () => {
  const url = useLocation();

  const { isPending, error, data } = useQuery({
    queryKey: ["teamData"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/wyniki.json"),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const teamName = url.pathname.split("/")[2];

  const teamGames = data.filter(
    (game) => game.Team1 === teamName || game.Team2 === teamName
  );

  console.log(teamGames);

  return (
    <div>
      <div className="league-name pt-4">
        <img src="" alt="" />
        <span className="text-lg font-bold uppercase">{teamName}</span>
      </div>
    </div>
  );
};
