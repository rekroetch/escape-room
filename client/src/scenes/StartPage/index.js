import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

function StartPage (props) {

  let count = 0

  if(props.puzzle && props.puzzle.length) {
    for (var i = 0; i < props.puzzle.length; i++) {
      if (props.puzzle[i].isSolved) {
        count += 1
      }
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
            <Link
              to="/office"
              className="start"
            >
              Start Game
            </Link>
          </div>
        </Col>
        <Col size="md-8">
          <div className="card text-white bg-dark justify-content-center info">
            <div className="card-body">
              <h5 className="card-title title">Background Story</h5>
              <p className="card-text">
                This story is about a newly wed couple who just got there first house! Couple months go by and the couple starts to act very distant...
              </p>
              <p className="card-text">
                Ponnie and Blyde were the couples names, ever since they moved in together everything changed between them. Arguments every night and tension when ever theyre next to each other. Blyde would often just stay in his office for countless hours at night then head to work in the moring. One day Blyde gets off work a hour early and sees a car leave the house. The first thing that comes to his mind is that Pommie is having an affair. This angered Blyde greatly, as soon as he entered the house he confronted her and things get heated. A couple weeks later Pommies mom shows up to the house because Pommie hasnt been picking up her phone calls. As her mom enters the house it was completely quiet, she moves her way toward Blydes office as she notices a bloody footprint. There Pommie lies pale with a puddle of blood with Blyde no where to be found. Immediately her mom calls the police...
              </p>
              <p className="card-text">
                Within this game you play as the detective that solves this tragic love story.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StartPage;
