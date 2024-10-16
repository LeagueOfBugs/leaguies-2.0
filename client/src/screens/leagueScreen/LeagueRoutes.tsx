import { Route, Routes } from "react-router-dom";
import LeagueScreen from "./LeagueScreen";

import EmptyLeagueState from "./EmptyLeagueState";
import Leagues from "./Leagues";
import Teams from "./nestedScreens/Teams";
import Rules from "./nestedScreens/Rules";
import Schedule from "./nestedScreens/Schedule";
import Season from "./nestedScreens/Season";

const TeamRoutes = () => {
  const noLeagues = false;
  return (
    <Routes>
      {noLeagues ? (
        <Route path="/" element={<EmptyLeagueState />} />
      ) : (
        <Route index element={<Leagues />} />
      )}
      <Route path="/:leagueId" element={<LeagueScreen />}>
        <Route index element={<Teams />} />
        <Route path="teams" element={<Teams />} />
        <Route path="rules" element={<Rules />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="season" element={<Season />} />
      </Route>
    </Routes>
  );
};

export default TeamRoutes;
