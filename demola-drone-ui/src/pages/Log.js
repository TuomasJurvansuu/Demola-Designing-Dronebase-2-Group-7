import React from "react";

const Log = () => {
  const logs = [
    { action: "Drone nousi ilmaan", timestamp: new Date("2025-04-01T10:00:00").toLocaleString() },
    { action: "Drone laskeutui", timestamp: new Date("2025-04-01T10:15:00").toLocaleString() },
    { action: "Drone nousi ilmaan", timestamp: new Date("2025-04-01T11:00:00").toLocaleString() },
    { action: "Drone laskeutui", timestamp: new Date("2025-04-01T11:20:00").toLocaleString() },
  ];

  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.action}</strong> at {log.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
