import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {
  return (
    <div
      className="page"
      style={{
        position: "relative",
      }}
    >
      <div
        className="desk"
        style={{
          position: "absolute",
          bottom: "150px",
          left: "500px"
        }}
      >
        <Route
          render={() =>
            props.puzzle[1].isSolved ? (
              <Link to="/desk" className="nav-link word">
                Desk (unlocked)
              </Link>
            ) : (
              <Link to="/office" className="nav-link word"></Link>
            )
          }
        />
      </div>
      <div
        className="painting"
        style={{
          position: "absolute",
          right: "0",
        }}
      >
        <Route
          render={() =>
            props.puzzle[2].isSolved ? (
              <Link to="/safe" className="nav-link word">
                Safe
              </Link>
            ) : (
              <Link to="/painting" className="nav-link word"></Link>
            )
          }
        />
      </div>
      <div
        className="clock"
        style={{
          position: "absolute",
          left: "10px",
        }}
      ></div>
      <div
        className="bookshelf"
        style={{
          position: "absolute",
          bottom: "112px",
        }}
      >
        <Link to="/bookshelf" className="nav-link word"></Link>
      </div>
    </div>
  );
}

export default Office;
