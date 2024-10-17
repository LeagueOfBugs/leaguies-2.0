import { Link } from "react-router-dom";

interface TeamItemProps {
  teamName: string;
  teamId: number;
}

const TeamItem = ({ teamName, teamId }: TeamItemProps) => {
  return (
    <li>
      <Link to={teamId.toString()}>{teamName}</Link>
    </li>
  );
};

export default TeamItem;
