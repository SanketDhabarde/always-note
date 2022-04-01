import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ icon, title, link }) {
  return (
    <NavLink to={link} className="nav btn-link my-1 px-5">
      <div className="nav-icon">{icon}</div>
      <div className="nav-name px-2">{title}</div>
    </NavLink>
  );
}

export default Nav;
