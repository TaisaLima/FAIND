
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";

export default function App() {
 <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main-menu" element={<MainMenu />} />
    </Routes>
}

