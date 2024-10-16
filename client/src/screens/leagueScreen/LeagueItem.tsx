import { Link } from "react-router-dom";

const LeagueItem = ({
  leagueId,
  leagueName,
}: {
  leagueId: number;
  leagueName: string;
}) => {
  return <Link to={leagueId.toString()}>{leagueName}</Link>;
};
export default LeagueItem;
