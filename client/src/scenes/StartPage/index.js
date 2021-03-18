import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"

function StartPage() {
  return (
    <div className="container">
      <Row>
        <Col size="md-12">
          <h1>Welcome to the Escape Room</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Link
            to="/office"
            className={
              window.location.pathname === "/office"
                ? "button"
                : "btn btn-danger"
            }
          >
            Start Game
          </Link>
        </Col>
      </Row>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div className="card text-white bg-dark mb-3 justify-content-center">
        <div className="card-body">
          <h5 className="card-title">Background Story</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid
            voluptate voluptatibus sequi autem pariatur natus tempora veritatis
            explicabo sapiente quia magnam ipsum, enim ipsam fugit, dolorem quam
            impedit non.
          </p>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit est beatae expedita eveniet? Deserunt obcaecati
            recusandae ratione, et, minus pariatur eveniet impedit, ad esse vel
            sequi laboriosam dolorem quam facilis?
          </p>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            laborum doloribus perspiciatis vitae sapiente repellendus quas
            debitis reiciendis dicta, ullam libero, aperiam illum delectus,
            temporibus animi ea laboriosam veniam neque?
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
