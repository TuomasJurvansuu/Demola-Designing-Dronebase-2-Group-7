import React from "react";
import "../styles/dronetelemetry.css";

export default function DroneTelemetry({ altitude, speed, coordinates }) {
  return (
    <div className="telemetry">
      <h3>Drone Telemetry</h3>
      <p>Altitude: {altitude} m</p>
      <p>Speed: {speed} km/h</p>
      <p>Coordinates: {coordinates.lat}, {coordinates.lng}</p>
    </div>
  );
}
