import { Link } from "react-router-dom";

interface TeamItemProps {
  teamName: string;
  league: string;
}

const TeamItem = ({ teamName, league }: TeamItemProps) => {
  return (
    <Link to={teamName}>
      {teamName} : {league ? league : "N/A"}
    </Link>
  );
};

export default TeamItem;
