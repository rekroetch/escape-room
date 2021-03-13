import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" style={{fontSize: "25px"}}>
        Escape Game
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Welcome
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/background"
              className={window.location.pathname === "/background" ? "nav-link active" : "nav-link"}
            >
              Background
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/office"
              className={window.location.pathname === "/office" ? "nav-link active" : "nav-link"}
            >
              Office
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bookshelf"
              className={window.location.pathname === "/bookshelf" ? "nav-link active" : "nav-link"}
            >
              Bookshelf
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/painting"
              className={window.location.pathname === "/painting" ? "nav-link active" : "nav-link"}
            >
              Painting
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/desk"
              className={window.location.pathname === "/desk" ? "nav-link active" : "nav-link"}
            >
              Desk
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/safe"
              className={window.location.pathname === "/safe" ? "nav-link active" : "nav-link"}
            >
              Safe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;