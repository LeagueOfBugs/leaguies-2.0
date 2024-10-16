import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useLeague } from "../../../context/leagueContext";

const Teams = () => {
  const { league } = useLeague();
  console.log("teams", league?.teams);
  return (
    <SubScreenLayout>
      <DisplayCard header={"Registered Teams"}>
        <ul>
          {league?.teams?.map((team) => {
            return <li key={team.id}>{team.name}</li>;
          })}
        </ul>
      </DisplayCard>

      <DisplayCard header={"Recommended Teams"}>Recommended Teams</DisplayCard>
    </SubScreenLayout>
  );
};

export default Teams;
