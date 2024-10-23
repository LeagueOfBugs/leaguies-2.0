import { useSelector } from "react-redux";
import EmptyLeagueState from "./EmptyLeagueState";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import LeagueItem from "./LeagueItem";
import DisplayCard from "../../components/displayCard/DisplayCard";

const Leagues = () => {
  const player = useSelector(selectPlayer);
  const leagues = player?.leagues;

  if (!leagues?.length) {
    return <EmptyLeagueState />;
  }

  return (
    <DisplayCard header="My Leagues">
      {leagues.map((league: League) => (
        <LeagueItem
          key={league.id}
          leagueName={league.name}
          leagueId={league.id}
        />
      ))}
    </DisplayCard>
  );
};
export default Leagues;
