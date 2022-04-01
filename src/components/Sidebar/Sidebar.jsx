import React from "react";
import Nav from "../Nav/Nav";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar py-1">
      <button className="btn btn-primary">Create New Note</button>
      <Nav icon={<i className="fas fa-home"></i>} title="Home" link="/home" />
      <Nav
        icon={<i class="fas fa-tag"></i>}
        title="Label"
        link="/label"
      />
      <Nav
        icon={<i className="fas fa-archive"></i>}
        title="Archive"
        link="/archive"
      />
      <Nav
        icon={<i className="fas fa-trash-alt"></i>}
        title="Trash"
        link="/trash"
      />
    </div>
  );
}

export default Sidebar;
