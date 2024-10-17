import React, { createContext, ReactNode } from "react";

export interface TeamContextType {
  team: Team | null;
}

export const TeamContext = createContext<TeamContextType | undefined>(
  undefined
);

interface TeamProviderProps {
  children: ReactNode;
  value: Team;
}

export const TeamProvider: React.FC<TeamProviderProps> = ({
  children,
  value,
}) => {
  return (
    <TeamContext.Provider value={{ team: value }}>
      {children}
    </TeamContext.Provider>
  );
};
