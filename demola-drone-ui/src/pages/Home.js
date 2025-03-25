import React, { useState } from "react";
import BatteryStatus from "../components/BatteryStatus";
import DroneStatus from "../components/DroneStatus";
import DroneMap from "../components/DroneMap";
import "../styles/home.css";
import DroneTelemetry from "../components/DroneTelemetry";
import Weather from "../components/Weather";

export default function Home() {
  const [battery1] = useState(85);
  const [battery2] = useState(100);

  const [telemetry] = useState({
    altitude: 2, // metriä
    speed: 0, // km/h
    coordinates: { lat: 65.0121, lng: 25.4651 }, // Oulu
  });

  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Dronebase Dashboard</h2>
        <p>Monitor the status of your drone and batteries in real time.</p>
      </header>
      
      <div className="status-section">
        <BatteryStatus level1={battery1} level2={battery2} />
        <DroneMap />
        <DroneStatus />
      </div>

      <div className="telemetry-section">
        <DroneTelemetry
          altitude={telemetry.altitude}
          speed={telemetry.speed}
          coordinates={telemetry.coordinates}
        />
        <Weather /> 
    </div>
  </div>

  );
}
