import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import defaultCrest from "../img/crest_default.svg";
import { Link } from "react-router-dom";

export const TeamsGroup = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["teamsData"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/teams.json"),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div className="flex flex-col gap-1">
      <div
        className="header flex flex-row text-xs gap-3 justify-between py-1 px-2
      border-b-[1px] border-zinc-600 pb-2"
      >
        <div className="w-4 flex justify-center">#</div>
        <div className="w-[220px] text-left">Drużyna</div>
        <div className="w-4 flex justify-center">M</div>
        <div className="rounded-full bg-green-700 text-white w-4">W</div>
        <div className="rounded-full bg-orange-500 text-white w-4">R</div>
        <div className="rounded-full bg-red-700 text-white w-4">P</div>
        <div className="w-4 flex justify-center">GF</div>
        <div className="w-4 flex justify-center">GA</div>
        <div className="w-4 flex justify-center">GD</div>
        <div className="w-4 flex justify-center">P</div>
      </div>
      {data.map((team, index) => (
        <div
          key={team.TeamId}
          className="flex flex-row gap-3 items-center text-xs justify-between hover:bg-zinc-700 rounded-md py-2 px-2 ease-in-out duration-500"
        >
          <div className="w-4 flex justify-center">{index + 1}.</div>
          <Link
            to={`/team/${team.TeamId}`}
            className="flex flex-row items-center gap-3 w-[220px]"
          >
            {team.LogoUrl ? (
              <img src={team.LogoUrl} alt={team.TeamName} className="w-5" />
            ) : (
              <img src={defaultCrest} alt="Herb" className="w-5" />
            )}
            <p className="text-left">{team.TeamName}</p>
          </Link>
          <div className="w-4 flex justify-center">{team.Played}</div>
          <div className="w-4 flex justify-center">{team.Won}</div>
          <div className="w-4 flex justify-center">{team.Drawn}</div>
          <div className="w-4 flex justify-center">{team.Lost}</div>
          <div className="w-4 flex justify-center">{team.GoalsFor}</div>
          <div className="w-4 flex justify-center">{team.GoalsAgainst}</div>
          <div className="w-4 flex justify-center">{team.GoalDifference}</div>
          <div className="w-4 flex justify-center">{team.Points}</div>
        </div>
      ))}
    </div>
  );
};
