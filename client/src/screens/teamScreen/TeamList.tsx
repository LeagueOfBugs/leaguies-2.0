import React from "react";

interface TeamListProps {
  children?: React.ReactNode;
}
const TeamList: React.FC<TeamListProps> = ({ children }) => {
  return <>{children}</>;
};

export default TeamList;
