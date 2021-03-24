import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css";

function Office(props) {
  function alertLocked(event) {
    event.preventDefault();
    const Swal = require("sweetalert2");
    Swal.fire("Uh oh! The desk is locked! Try to find the key.");
  }

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
                right: "-12px",
              }}
            ></Link>
          ) : (
            <Link
              to="/office"
              className="desk"
              style={{
                position: "absolute",
                bottom: "150px",
                right: "-12px",
              }}
              onClick={alertLocked}
            ></Link>
          )
        }
      />
      <Route
        render={() =>
          props.puzzle[2].isSolved ? (
            <Link
              to="/safe"
              className="safeImg"
              style={{
                position: "absolute",
                right: "70px",
                bottom: "565px",
              }}
            ></Link>
          ) : (
            <Link
              to="/painting"
              className="painting"
              style={{
                position: "absolute",
                right: "70px",
                bottom: "565px",
              }}
            ></Link>
          )
        }
      />
      <div
        className="painting2"
        style={{
          position: "absolute",
          right: "215px",
          bottom: "680px",
        }}
      ></div>
      <div
        className="painting3"
        style={{
          position: "absolute",
          right: "253px",
          bottom: "523px",
        }}
      ></div>
      <div
        className="clock"
        style={{
          position: "absolute",
          right: "493px",
          bottom: "650px",
        }}
      ></div>
      <div
        className="lamp"
        style={{
          position: "absolute",
          right: "384px",
          bottom: "187px",
        }}
      ></div>
      <div
        className="chair"
        style={{
          position: "absolute",
          right: "520px",
          bottom: "158px",
        }}
      ></div>
      <div
        className="rug"
        style={{
          position: "absolute",
          right: "292px",
          bottom: "16px",
        }}
      ></div>
      <Link
        className="bookshelf"
        style={{
          position: "absolute",
          bottom: "177px",
        }}
        to="/bookshelf"
      ></Link>
    </div>
  );
}

export default Office;
