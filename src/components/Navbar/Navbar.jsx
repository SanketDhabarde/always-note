import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useToggle } from "../../hooks";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import "./Navbar.css";

function Navbar() {
  const [isMobileSidebarVisible, toggleMobileSidebar] = useToggle();
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <div className="header-brand px-3">
          {pathname !== "/" && (
            <div className="menu" onClick={() => toggleMobileSidebar()}>
              <i className="fas fa-bars"></i>
            </div>
          )}
          <Link to="/" className="btn-link">
            Always Notes
          </Link>
        </div>
      </header>
      {isMobileSidebarVisible && <MobileSidebar />}
    </>
  );
}

export default Navbar;
