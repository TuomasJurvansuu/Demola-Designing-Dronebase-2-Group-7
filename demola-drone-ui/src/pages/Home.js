import React, { useState } from "react";
import BatteryStatus from "../components/BatteryStatus";
import DroneStatus from "../components/DroneStatus";

export default function Home() {
  const [battery1] = useState(85); // Kovakoodattu akun taso
  const [battery2] = useState(90); // Kovakoodattu akun taso
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dronebase</h1>
      <BatteryStatus level1={battery1} level2={battery2} />
      <DroneStatus />
    </div>
  );
}
