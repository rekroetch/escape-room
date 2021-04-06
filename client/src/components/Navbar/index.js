import React from "react";
import { Link, Route } from "react-router-dom";
import "./navbar.css"
import logo from "../../images/key-logo.png"

function Navbar(props) {
  return (
    <div className="container-nav">
    <nav
      className="navbar navbar-expand-lg navbar navbar-light"
    >
      <Link className="navbar-logo" to="/" >
        <img className="navImg"
          src = {logo}
          alt ="Logo"></img>
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
              Intro
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
          <li className="nav-item logout">
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


