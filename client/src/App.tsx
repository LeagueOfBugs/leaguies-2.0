import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./screens/splash";
import MobileNav from "./components/ui/navigation/mobile/MobileNav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;
