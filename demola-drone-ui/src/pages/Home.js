import React, { useState } from "react";
import BatteryStatus from "../components/BatteryStatus";
import DroneStatus from "../components/DroneStatus";
import DroneMap from "../components/DroneMap";
import "../styles/home.css";

export default function Home() {
  const [battery1] = useState(85);
  const [battery2] = useState(100);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Dronebase Dashboard</h1>
        <p>Monitor the status of your drone and batteries in real time.</p>
      </header>
      
      <div className="status-section">
        <BatteryStatus level1={battery1} level2={battery2} />
        <DroneMap />
        <DroneStatus />
      </div>
    </div>
  );
}
