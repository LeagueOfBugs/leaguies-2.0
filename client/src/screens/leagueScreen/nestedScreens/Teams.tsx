import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";
import fetchNearbyTeams from "../../../service/fetchNearbyTeams";
import useSWR from "swr";

const Teams = () => {
  const { league } = useLeague();
  const { data: teams, error } = useSWR("nearbyTeams", fetchNearbyTeams);
  console.log("error", error);
  return (
    <SubScreenLayout>
      <DisplayCard header={"Registered Teams"}>
        <ul>
          {league?.teams?.map((team) => {
            return <li key={team.id}>{team.name}</li>;
          })}
        </ul>
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
