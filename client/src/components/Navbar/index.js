import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar navbar-light"
      style={{ backgroundColor: "pink" }}
    >
      <Link className="navbar-brand" to="/" style={{ fontSize: "25px" }}>
        Escape Game
      </Link>
      <div className="container-fluid collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/background"
              className={
                window.location.pathname === "/background"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Main Room
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/scoreBoard"
              className={
                window.location.pathname === "/scoreBoard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Score Board
            </Link>
          </li>
        </ul>
        <span className="navbar-item">
          <Link to="/" className={"nav-link"}>Logout</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
