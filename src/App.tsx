import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./component/Home";
import Profile from "./component/Profile";
import SethingsPage from "./component/SethingsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SethingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
