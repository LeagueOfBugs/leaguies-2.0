import React from "react";

interface SubScreenLayoutProps {
  children: React.ReactNode;
}

const SubScreenLayout: React.FC<SubScreenLayoutProps> = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

export default SubScreenLayout;
