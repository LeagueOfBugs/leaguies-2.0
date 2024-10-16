import React, { createContext, useContext, ReactNode } from "react";

interface LeagueContextType {
  league: League | null;
}

const LeagueContext = createContext<LeagueContextType | undefined>(undefined);

interface LeagueProviderProps {
  children: ReactNode;
  value: League;
}

export const LeagueProvider: React.FC<LeagueProviderProps> = ({
  children,
  value,
}) => {
  return (
    <LeagueContext.Provider value={{ league: value }}>
      {children}
    </LeagueContext.Provider>
  );
};

export const useLeague = (): LeagueContextType => {
  const context = useContext(LeagueContext);
  if (!context) {
    throw new Error("useLeague must be used within a LeagueProvider");
  }
  return context;
};
