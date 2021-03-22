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
      <Route
        render={() =>
          props.puzzle[1].isSolved ? (
            <Link 
              to="/desk" 
              className="desk"
              style={{
                position: "absolute",
                bottom: "150px",
                left: "500px"
              }}
            >  
            </Link>
          ) : (
            <Link to="/office"
              className="desk"
              style={{
                position: "absolute",
                bottom: "150px",
                left: "500px"
              }}
            ></Link>
          )
        }
      />
      <Route
        render={() =>
          props.puzzle[2].isSolved ? (
            <Link to="/safe" 
              className="safe"
              style={{
                position: "absolute",
                right: "0",
              }}
            ></Link>
          ) : (
            <Link to="/painting" 
              className="painting"
              style={{
                position: "absolute",
                right: "0",
              }}
            ></Link>
          )
        }
      />
      <div
        className="clock"
        style={{
          position: "absolute",
          left: "10px",
        }}
      ></div>

      <Link
        className="bookshelf"
        style={{
          position: "absolute",
          bottom: "112px",
        }}
        to="/bookshelf" 
      >
      </Link>
    </div>
  );
}

export default Office;
