import { Link } from "react-router-dom";

interface TeamItemProps {
  teamName: string;
}

const TeamItem = ({ teamName }: TeamItemProps) => {
  return (
    <li>
      <Link to={teamName}>{teamName}</Link>
    </li>
  );
};

export default TeamItem;
