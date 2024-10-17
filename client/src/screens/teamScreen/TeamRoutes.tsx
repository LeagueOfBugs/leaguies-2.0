import { Route, Routes } from "react-router-dom";
import TeamScreen from "./TeamScreen";
import Record from "./nestedScreens/Record";
import Roster from "./nestedScreens/Roster";
import Activity from "./nestedScreens/Activity";
import EmptyTeamState from "./EmptyTeamState";
import Teams from "./Teams";

const TeamRoutes = () => {
  const noTeams = false;

  return (
    <Routes>
      {noTeams ? (
        <Route path="/" element={<EmptyTeamState />} />
      ) : (
        <Route index element={<Teams />} />
      )}
      <Route path="/:teamId" element={<TeamScreen />}>
        <Route index element={<Roster />} />
        <Route path="roster" element={<Roster />} />
        <Route path="record" element={<Record />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
};

export default TeamRoutes;
