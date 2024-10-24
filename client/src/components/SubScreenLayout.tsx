import React from "react";

interface SubScreenLayoutProps {
  children: React.ReactNode;
}

const SubScreenLayout: React.FC<SubScreenLayoutProps> = ({ children }) => {
  return <section className="space-y-2">{children}</section>;
};

export default SubScreenLayout;
