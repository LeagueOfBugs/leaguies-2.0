import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileNav from "./components/ui/navigation/mobile/MobileNav";
import Header from "./components/ui/header/header";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import PlayerScreen from "./screens/playerScreen/PlayerScreen";
import useFetchPlayer from "./hooks/useFetchPlayer";
import TeamRoutes from "./screens/teamScreen/TeamRoutes";
import LeagueRoutes from "./screens/leagueScreen/LeagueRoutes";

function App() {
  useFetchPlayer();

  return (
    <Router>
      <Header />
      <div className="mb-12"></div>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/league/*" element={<LeagueRoutes />} />
        <Route path="/player" element={<PlayerScreen />} />
        <Route path="/team/*" element={<TeamRoutes />} />
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;
