import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="header-brand px-5">
        <Link to="/" className="btn-link">
          Always Notes
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
