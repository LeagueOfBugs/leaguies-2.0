import { Link } from "react-router-dom";

const LeagueItem = ({ leagueName }: { leagueName: string }) => {
  return <Link to={leagueName}>{leagueName}</Link>;
};
export default LeagueItem;
