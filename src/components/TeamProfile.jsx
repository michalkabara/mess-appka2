import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { useParams } from "react-router-dom";
import defaultCrest from "../img/crest_default.svg";

export const TeamProfile = () => {
  const { teamId } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["teamData"],
    queryFn: () => fetchData("https://jte-edge.b-cdn.net/teams.json"),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const teamData = data.find((team) => team.TeamId === teamId);

  console.log(data);

  return (
    <div>
      <div className="league-name pt-4 flex items-start flex-row gap-5">
        {teamData?.LogoUrl ? (
          <img src={teamData.LogoUrl} alt={teamData.TeamName} className="w-5" />
        ) : (
          <img src={defaultCrest} alt="Herb" className="w-5" />
        )}
        <span className="text-lg font-bold uppercase">
          {teamData?.TeamName}
        </span>
      </div>
    </div>
  );
};
