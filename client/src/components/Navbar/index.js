import React from "react";
import { Link, Route } from "react-router-dom";
import "./navbar.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <div className="container-nav">
    <nav
      className="navbar navbar-expand-lg navbar navbar-light"
    >
      <Link className="navbar-logo" to="/" style={{ fontSize: "25px" }}>
        <img className="navImg" src = {'https://png2.cleanpng.com/sh/bc1f6ba712856f2eb18ecda39dd510c0/L0KzQYm3VsI2N6VqjpH0aYP2gLBuTf9tcadqRdR7YX7meH7skBNieJYyitH4bT3og7TokPUufJlqReR4b32whrrrhf8ub5JyRdd8Y3HzdX75jB9uNWZnS6JtMXS5crLshfQ4NmQ9TqU6OEO0QYa5WckzPmI1SqkBNUexgLBu/kisspng-olive-branch-escape-room-escape-the-room-video-gam-escape-room-5b30d1d6baeed7.3863183115299261027657.png'} alt ="Logo"></img>
      </Link>
      <div className="container-fluid collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/startPage"
              exact="true"
              className={
                window.location.pathname === "/startPage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Game Info
            </Link>
          </li>
          <li className="nav-item">
            <Route render={() => (
              window.location.pathname === "/office" ? "" : (
                <Link
                to="/office"
                exact="true"
                className={
                  window.location.pathname === "/office"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Back to Office
              </Link>
              )
            )}/>
          </li>
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
              Leader Board
            </Link>
          </li>
          <li className="nav-item">
          <Route render={() => (
            props.user ? (
              <Link to="/" exact="true" className="nav-link" onClick={props.logout}>Logout</Link>
            ) : ""
          )}/>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;


