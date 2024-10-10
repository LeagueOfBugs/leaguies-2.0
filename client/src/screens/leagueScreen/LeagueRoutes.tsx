import { Route, Routes } from "react-router-dom";
import LeagueScreen from "./LeagueScreen";
import Teams from "./Teams";
import Rules from "./Rules";
import Schedule from "./Schedule";
import Season from "./Season";

const TeamRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LeagueScreen />}>
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
