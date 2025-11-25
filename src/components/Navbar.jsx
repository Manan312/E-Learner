import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";

export default function Navbar() {
  return (
    <nav className="glass-navbar">
      <div className="glass-logo">
        <Link to="/">E-Learner</Link>
      </div>

      <ul className="glass-menu">
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/personnel">Personnel</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
