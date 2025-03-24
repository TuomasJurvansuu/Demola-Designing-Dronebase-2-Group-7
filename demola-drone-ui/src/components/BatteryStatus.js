import React from "react";

export default function BatteryStatus({ level }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h3>Akku</h3>
      <p>{level}%</p>
    </div>
  );
}
