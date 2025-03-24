import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/routeplanner">Route Planner</Link></li>
        <li><Link to="/status">Status</Link></li>
        <li><Link to="/manual">Manual Control</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
