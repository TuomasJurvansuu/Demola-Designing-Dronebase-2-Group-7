import React, { useState } from "react";
import BatteryStatus from "../components/BatteryStatus";

export default function Home() {
  const [battery] = useState(85); // Kovakoodattu akun taso 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dronebase</h1>
      <BatteryStatus level={battery} />
    </div>
  );
}
