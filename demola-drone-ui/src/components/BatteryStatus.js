import React from "react";
import "../styles/batterystatus.css";

export default function BatteryStatus({ level1, level2 }) {
  const getBatteryStatus = (level) => (level >= 100 ? "Full" : "Charging");

  return (
    <div className="BatteryStatus">
      <h2>Base Battery Status</h2>
      <p>Battery 1: {level1}% - {getBatteryStatus(level1)}</p>
      <p>Battery 2: {level2}% - {getBatteryStatus(level2)}</p>
    </div>
  );
}
