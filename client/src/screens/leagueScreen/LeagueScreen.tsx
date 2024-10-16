import { useNavigate, useParams } from "react-router-dom";
import Badge from "../../components/Badge";
import NavLayout from "../../components/NavLayout";
import { ChevronLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/selectors/playerSelectors";
import { LeagueProvider } from "../../context/leagueContext";

const leagueScreenNavLinks = [
  {
    to: "rules",
    label: "Rules",
  },
  {
    to: "season",
    label: "Season",
  },
  {
    to: "teams",
    label: "Teams",
  },
  {
    to: "schedule",
    label: "Schedule",
  },
];

const LeagueScreen = () => {
  const { leagueId } = useParams();
  const navigate = useNavigate();

  const player = useSelector(selectPlayer);

  const playerLeague = player.leagues.find(
    (league: League) => league.id === Number(leagueId)
  );

  if (!playerLeague) {
    return <span>League not found</span>;
  }

  return (
    <LeagueProvider value={playerLeague}>
      <div className="flex flex-col items-center w-svw">
        <ChevronLeft
          className="w-8 h-8 self-baseline mr-5 mt-2"
          onClick={() => navigate("/league")}
        />
        <div className="flex justify-center">
          <Badge />
        </div>
        <span>League: {playerLeague.name}</span>
        <NavLayout navLinks={leagueScreenNavLinks} />
      </div>
    </LeagueProvider>
  );
};

export default LeagueScreen;
