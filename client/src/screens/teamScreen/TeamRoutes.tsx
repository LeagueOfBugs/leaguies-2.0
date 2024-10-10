// src/screens/teamScreen/TeamRoutes.tsx
import { Route, Routes } from "react-router-dom";
import TeamScreen, { Activity, Record, Roster } from "./TeamScreen";

const TeamRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamScreen />}>
        <Route index element={<Record />} />
        <Route path="record" element={<Record />} />
        <Route path="roster" element={<Roster />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
};

export default TeamRoutes;
