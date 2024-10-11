import { useNavigate, useParams } from "react-router-dom";
import Badge from "../../components/Badge";
import NavLayout from "../../components/NavLayout";
import { ChevronLeft } from "lucide-react";

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
  return (
    <div className="flex flex-col items-center w-svw space-y-5">
      <ChevronLeft
        className="w-8 h-8 self-baseline mr-5 mt-2"
        onClick={() => navigate("/league")}
      />
      <div className="flex justify-center">
        <Badge />
      </div>
      <span>League: {leagueId}</span>
      <NavLayout navLinks={leagueScreenNavLinks} />
    </div>
  );
};

export default LeagueScreen;
