import React from "react";
import "../styles/batterystatus.css";

export default function BatteryStatus({ level1, level2 }) {
  return (
    <div className="BatteryStatus">
      <h3>Battery Status</h3>
      <p>Battery 1: {level1}%</p>
      <p>Battery 2: {level2}%</p>
    </div>
  );
}
