import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileNav from "./components/ui/navigation/mobile/MobileNav";
import Header from "./components/ui/header/header";
import SplashScreen from "./screens/SplashScreen";
import PlayerScreen from "./screens/PlayerScreen";
import LeagueScreen from "./screens/LeagueScreen";
import TeamScreen from "./screens/TeamScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/player" element={<PlayerScreen />} />
        <Route path="/league" element={<LeagueScreen />} />
        <Route path="/team" element={<TeamScreen />} />
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;
