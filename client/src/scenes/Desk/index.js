import React from "react";
import "./style.css";

function Desk() {
  return (
    <div
      className="deskPage"
      style={{
        position: "relative",
      }}
    >
      <div className="tableTop">
        <div className="deskTitle">
          Take a close look at the items on the desk!
        </div>
        <div
          className="calendar"
          style={{
            position: "absolute",
            bottom: "25px",
            left: "500px",
          }}
        ></div>
                <div
          className="december"
          style={{
            position: "absolute",
            bottom: "341px",
            right: "160px",
          }}
        >
          December
        </div>
        <div
          className="dad"
          style={{
            position: "absolute",
            bottom: "180px",
            right: "49px",
          }}
        >
          Dad's B-Day
        </div>
        <div
          className="dentist"
          style={{
            position: "absolute",
            bottom: "115px",
            right: "380px",
          }}
        >
          Dentist

        </div>
        <div
          className="important"
          style={{
            position: "absolute",
            bottom: "230px",
            right: "308px",
          }}
        >
          Important!

        </div>
        <div
          className="book"
          style={{
            position: "absolute",
            bottom: "389px",
            left: "20px",
          }}
        ></div>
        <div
          className="title"
          style={{
            position: "absolute",
            bottom: "657px",
            left: "112px",
          }}
        >
          Sherlock Holmes
          <div>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div
          className="cup"
          style={{
            position: "absolute",
            bottom: "645px",
            right: "20px",
          }}
        ></div>
        <div
          className="stapler"
          style={{
            position: "absolute",
            bottom: "100px",
            left: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Desk;
