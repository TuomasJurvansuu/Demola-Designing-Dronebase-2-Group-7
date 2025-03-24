import React from "react";
import "../styles/dronestatus.css";

const DroneStatus = () => {
  return (
    <div className="Dronestatus">
      <h2>Drone Status</h2>
      <p>Battery: 85%</p>
      <p>Signal: Strong</p>
      <p>Current Task: Idle</p>
    </div>
  );
};

export default DroneStatus;
