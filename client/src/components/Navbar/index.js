import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
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
              exact="true"
              className={
                window.location.pathname === "/background"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Game Info
            </Link>
          </li>
          {/* added for the purpose of testing protected routes only */}
          <li className="nav-item">
            <Link
              to="/office"
              exact="true"
              className={
                window.location.pathname === "/office"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Office
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/painting"
              exact="true"
              className={
                window.location.pathname === "/painting"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Painting
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/desk"
              exact="true"
              className={
                window.location.pathname === "/desk"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Desk
            </Link>
          </li>
          {/* added for the purpose of testing protected routes only */}
          <li className="nav-item">
            <Link
              to="/bookshelf"
              exact="true"
              className={
                window.location.pathname === "/bookshelf"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Bookshelf
            </Link>
            </li>
          {/* links above are temporary */}
          <li className="nav-item">
            <Link
              to="/scoreBoard"
              exact="true"
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
        <span className="navbar-nav nav-item">
          <Link to="/" exact="true" className="nav-link" onClick={props.logout}>Logout</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
