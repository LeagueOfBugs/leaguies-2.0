import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import TeamItem from "./TeamItem";
import EmptyTeamState from "./EmptyTeamState";
import DisplayCard from "../../components/displayCard/DisplayCard";
import { Fab } from "../../components/Fab";
import { Plus } from "lucide-react";

const Teams = () => {
  const player: Player = useSelector(selectPlayer);
  const teams = player?.teams ?? [];

  if (!teams.length) return <EmptyTeamState />;

  return (
    <section>
      <DisplayCard header="Teams">
        <ul>
          {teams.map((team) => (
            <TeamItem key={team.name} teamId={team.id} teamName={team.name} />
          ))}
        </ul>
      </DisplayCard>
      <div className="absolute bottom-24 right-5">
        <Fab>
          <Plus />
        </Fab>
      </div>
    </section>
  );
};

export default Teams;
