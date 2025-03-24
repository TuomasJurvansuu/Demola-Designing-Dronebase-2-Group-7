import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/routeplanner" className="nav-link">Route Planner</NavLink></li>
        <li><NavLink to="/status" className="nav-link">Status</NavLink></li>
        <li><NavLink to="/manual" className="nav-link">Manual Control</NavLink></li>
        <li><NavLink to="/settings" className="nav-link">Settings</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
