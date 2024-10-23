import { Plus } from "lucide-react";
import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";
import fetchNearbyTeams from "../../../service/fetchNearbyTeams";
import useSWR from "swr";

const Teams = () => {
  const { league } = useLeague();
  const { data: teams, error } = useSWR("nearbyTeams", fetchNearbyTeams);

  if (error) return <div>Failed to load</div>;
  if (!teams) return <div>Loading...</div>;

  const leagueTeamLimit = league?.teamLimit - league?.teams?.length;
  const openLeagueSpots = [];

  console.log(league)
  for (let i = 0; i < leagueTeamLimit; i++) {
    openLeagueSpots.push(
      <div className="flex flex-row space-x-2">
        <Plus />
        <span>Invite a team</span>
      </div>
    );
  }

  return (
    <SubScreenLayout>
      <DisplayCard header={"Registered Teams"}>
        <ul>
          {league?.teams?.map((team) => {
            return <li key={team.id}>{team.name}</li>;
          })}
        </ul>
        {...openLeagueSpots}
      </DisplayCard>

      <DisplayCard header={"Recommended Teams"}>
        <ul>
          {teams ? (
            teams.map((team: Team) => {
              return <li key={team.id}>{team.name}</li>;
            })
          ) : (
            <span>No nearby teams</span>
          )}
        </ul>
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Teams;
