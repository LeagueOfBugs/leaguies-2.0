import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileNav from "./components/ui/navigation/mobile/MobileNav";
import Header from "./components/ui/header/header";
import SplashScreen from "./screens/SplashScreen";
import PlayerScreen, {
  Activity,
  Record,
  Roster,
} from "./screens/playerScreen/PlayerScreen";
import LeagueScreen from "./screens/LeagueScreen";
import TeamScreen from "./screens/TeamScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/league" element={<LeagueScreen />} />
        <Route path="/team" element={<TeamScreen />} />

        <Route path="/player" element={<PlayerScreen />}>
          <Route path="record" element={<Record />} />
          <Route path="roster" element={<Roster />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;
