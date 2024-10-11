import { Route, Routes } from "react-router-dom";
import TeamScreen from "./TeamScreen";
import Record from "./Record";
import Roster from "./Roster";
import Activity from "./Activity";
import EmptyTeamState from "./EmptyTeamState";

const TeamRoutes = () => {
  const noTeams = false;
  return (
    <Routes>
      {noTeams ? (
        <Route path="/" element={<EmptyTeamState />} />
      ) : (
        <Route path="/" element={<TeamScreen />}>
          <Route index element={<Record />} />
          <Route path="record" element={<Record />} />
          <Route path="roster" element={<Roster />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      )}
    </Routes>
  );
};

export default TeamRoutes;
