import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"
import styled from "styled-components"

const Button = styled.button`
background-color: #ff6699;
font-size: 75px;
font-family: courier;
text-transform: uppercase;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
box-shadow: 0px 20px 20px lightblue;
`;

function StartPage (props) {

  let count = 0

  for (var i = 0; i < props.puzzle.length; i++) {
    if (props.puzzle[i].isSolved) {
      count += 1
    }
  }

  const progress = Math.floor((count/3)*100) +"%"
  console.log(`count: ${count}, progress: ${progress}`)


  return (
    <div className="background">
      <header>
        Welcome {props.user ? props.user.email : "not logged in"}
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}
        </div>
      </div>
      <Row>
        <Col size="md-4">
          <div className="startBtn">
            <Button>
            <Link
              to="/office"
              className="start"
            >
              Start Game
            </Link>
            </Button>
          </div>
        </Col>
        <Col size="md-8">
          <div className="card text-white bg-dark justify-content-center info">
            <div className="card-body">
              <h5 className="card-title title">Background Story</h5>
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
        </Col>
      </Row>
    </div>
  );
}

export default StartPage;
