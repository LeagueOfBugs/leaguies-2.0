import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./screens/splash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
