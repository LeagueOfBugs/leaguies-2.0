import NavLayout from "../../components/NavLayout";
import Badge from "../../components/Badge";
import CTAButton from "../../components/CTAButton";
import { useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TeamProvider } from "../../context/teamContext";
import useSWR from "swr";
import fetchTeam from "../../service/fetchTeam";

const teamScreenNavLinks = [
  {
    to: "record",
    label: "Record",
  },
  {
    to: "roster",
    label: "Roster",
  },
  {
    to: "activity",
    label: "Activity",
  },
];

const teamCTA = [
  {
    label: "REQUEST TO JOIN",
    onClick: () => {},
  },
  {
    label: "FOLLOW TEAM",
    onClick: () => {},
  },
];

const TeamScreen = () => {
  const { teamId } = useParams();

  const {
    data: team,
    isLoading,
    error,
  } = useSWR(teamId ? `team-${teamId}` : null, () => fetchTeam(teamId ?? ""));

  const navigate = useNavigate();
  console.log(team);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <TeamProvider value={team}>
      <div className="flex flex-col items-center w-svw space-y-5">
        <ChevronLeft
          className="w-8 h-8 self-baseline mr-5 mt-2"
          onClick={() => navigate("/team")}
        />
        <div>
          <Badge />
        </div>
        <div>{team.league.name}</div>
        <div>{team.name}</div>
        <div className="max-w-52">
          <CTAButton ctas={teamCTA} />
        </div>
        <NavLayout navLinks={teamScreenNavLinks} />
      </div>
    </TeamProvider>
  );
};

export default TeamScreen;
