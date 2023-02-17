import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import Section from "./pages/Section.jsx";
import MainSeticon from "./pages/Main seticon.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/Browse" element={<Browse />} />
<Route path="/Section" element={<Section />} />
<Route path="/main seticon" element={<MainSeticon />} />
    </Routes>
  );
}
