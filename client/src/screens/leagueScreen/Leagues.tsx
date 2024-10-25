import { useSelector } from "react-redux";
import EmptyLeagueState from "./EmptyLeagueState";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import LeagueItem from "./LeagueItem";
import DisplayCard from "../../components/displayCard/DisplayCard";
import { Fab } from "../../components/Fab";
import { Plus } from "lucide-react";

const Leagues = () => {
  const player = useSelector(selectPlayer);
  const leagues = player?.leagues;

  if (!leagues?.length) {
    return <EmptyLeagueState />;
  }

  return (
    <section>
      <DisplayCard header="My Leagues">
        {leagues.map((league: League) => (
          <LeagueItem
            key={league.id}
            leagueName={league.name}
            leagueId={league.id}
          />
        ))}
      </DisplayCard>
      <div className="absolute bottom-24 right-5">
        <Fab>
          <Plus />
        </Fab>
      </div>
    </section>
  );
};
export default Leagues;
