import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";
import Forms from "./pages/IsLogged/Forms";
import Dashboard from "./pages/IsLogged/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />          
        <Route path="/mainmenu" element={<MainMenu />} /> 
        <Route path="/forms" element={<Forms />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
