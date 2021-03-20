import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

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
                This story is about a family of four, mom and dad with there 2 twin boys. The twins were the bestest friends throughout there youth but as time came they would eventrually meet new friends...
              </p>
              <p className="card-text">
                The first twin was named Steve and the other was named Lucas. Steve was always so close to Lucas until Highschool came around. Then Lucas started to bring a new friend named Lewis around the house all the time and with a glipms of an eye you can see the malice/envy in Steves face. A year goes by and Steve has had enough of this new guy taking his place so he plans the perfect murder. Steve tells Lucas that his Aunt Nancy needs him to come over to pick up a Chicken for dinner and Lewis can stay here while he waits. As soon as Lucas came back he discovers the whole house trashed, Lewis's body on the couch and his brother knocked out.
                The police floods the house with detectives but yet no leads were found for the death of Lewis. As days pass Steve cofronts his brother in the hospital about what has happended, but all he got was deadends. With suspicion Lucas can tell something was up with is brother. 
              </p>
              <p className="card-text">
                Within this game you play as the Lucas investigating Steve to solve the murder of your good friend Lewis.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StartPage;
