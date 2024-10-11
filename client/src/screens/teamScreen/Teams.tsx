import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selectors/userSelectors";
import TeamList from "./TeamList";
import TeamItem from "./TeamItem";
import EmptyTeamState from "./EmptyTeamState";

const Teams = () => {
  const player = useSelector(selectPlayer);
  const teams = player?.teams || [];

  if (!teams.length) return <EmptyTeamState />;

  return (
    <TeamList>
      <div>Teams</div>
      <div className="flex flex-col space-y-2">
        {teams.map((team) => (
          <TeamItem key={team.name} teamName={team.name} league={team.league} />
        ))}
      </div>
    </TeamList>
  );
};

export default Teams;
