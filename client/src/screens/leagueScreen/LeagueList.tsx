interface LeagueListProps {
  children?: React.ReactNode;
}
const LeagueList: React.FC<LeagueListProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default LeagueList;
