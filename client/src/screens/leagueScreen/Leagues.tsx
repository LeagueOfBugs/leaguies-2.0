import { useSelector } from "react-redux";
import EmptyLeagueState from "./EmptyLeagueState";
import LeagueList from "./LeagueList";
import { selectPlayer } from "../../redux/selectors/userSelectors";
import LeagueItem from "./LeagueItem";

const Leagues = () => {
  const player = useSelector(selectPlayer);
  console.log(player);
  const leagues = player.teams
    ?.filter((team) => team.league !== null)
    .map((team) => team.league);

  if (!leagues) return <EmptyLeagueState />;

  return (
    <LeagueList>
      {leagues.map((league) => (
        <LeagueItem key={league} leagueName={league} />
      ))}
    </LeagueList>
  );
};
export default Leagues;
