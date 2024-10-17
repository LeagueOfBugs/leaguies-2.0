import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import TeamItem from "./TeamItem";
import EmptyTeamState from "./EmptyTeamState";
import DisplayCard from "../../components/displayCard/DisplayCard";

const Teams = () => {
  const player = useSelector(selectPlayer);
  const teams = player?.teams;

  if (!teams.length) return <EmptyTeamState />;

  return (
    <div className="flex flex-col space-y-2">
      <DisplayCard header="Teams">
        <ul>
          {teams.map((team) => (
            <TeamItem
              key={team.name}
              teamName={team.name}
              league={team.league}
            />
          ))}
        </ul>
      </DisplayCard>
    </div>
  );
};

export default Teams;
