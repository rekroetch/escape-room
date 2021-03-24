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
            bottom: "20px",
            left: "204px",
          }}
        ></div>
        <div
          className="december"
          style={{
            position: "absolute",
            bottom: "417px",
            right: "365px",
          }}
        >
          December
        </div>
        <div
          className="dad"
          style={{
            position: "absolute",
            bottom: "199px",
            right: "252px",
          }}
        >
          Dad's B-Day
        </div>
        <div
          className="dentist"
          style={{
            position: "absolute",
            bottom: "204px",
            right: "500px",
          }}
        >
          Dentist
        </div>
        <div
          className="important"
          style={{
            position: "absolute",
            bottom: "351px",
            right: "332px",
          }}
        >
          Important!
        </div>
        <div
          className="pin"
          style={{
            position: "absolute",
            bottom: "389px",
            left: "314px",
          }}
        >
          pin# 1234
        </div>
        <div
          className="code"
          style={{
            position: "absolute",
            bottom: "374px",
            left: "311px",
          }}
        >
          doorcode #2468
        </div>
        <div
          className="book"
          style={{
            position: "absolute",
            bottom: "512px",
            left: "20px",
          }}
        ></div>
        <div
          className="title"
          style={{
            position: "absolute",
            bottom: "698px",
            left: "64px",
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
            bottom: "625px",
            left: "570px",
          }}
        ></div>
        <div
          className="pen"
          style={{
            position: "absolute",
            bottom: "465px",
            left: "570px",
          }}
        ></div>
                <div
          className="glass"
          style={{
            position: "absolute",
            bottom: "276px",
            left: "287px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Desk;
