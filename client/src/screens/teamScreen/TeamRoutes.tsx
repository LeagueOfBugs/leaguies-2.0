import { Route, Routes } from "react-router-dom";
import TeamScreen from "./TeamScreen";
import Record from "./Record";
import Roster from "./Roster";
import Activity from "./Activity";
import EmptyTeamState from "./EmptyTeamState";
import Teams from "./Teams";

const TeamRoutes = () => {
  const noTeams = false;

  return (
    <Routes>
      {noTeams ? (
        <Route path="/" element={<EmptyTeamState />} />
      ) : (
        <>
          <Route index element={<Teams />} />
          <Route path="/:teamId" element={<TeamScreen />}>
            <Route path="record" element={<Record />} />
            <Route path="roster" element={<Roster />} />
            <Route path="activity" element={<Activity />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default TeamRoutes;
