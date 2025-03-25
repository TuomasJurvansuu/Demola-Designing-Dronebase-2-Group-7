import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import RoutePlanner from "./pages/RoutePlanner";
import Status from "./pages/Status";
import ManualControl from "./pages/ManualControl";
import Settings from "./pages/Settings";
import "./styles/global.css";
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route-planner" element={<RoutePlanner />} /> 
        <Route path="/status" element={<Status />} />
        <Route path="/manual" element={<ManualControl />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
