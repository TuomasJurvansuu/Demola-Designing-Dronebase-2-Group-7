import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import RoutePlanner from "./pages/RoutePlanner";
import Status from "./pages/Status.js";
import ManualControl from "./pages/ManualControl.js";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routeplanner" element={<RoutePlanner />} />
        <Route path="/status" element={<Status />} />
        <Route path="/manual" element={<ManualControl />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
