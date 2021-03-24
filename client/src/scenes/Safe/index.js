import React from "react";
import { Route, Link } from "react-router-dom";
import Row from "../../components/Row";
import API from "../../utils/API";
import "./style.css";

function Safe(props) {
  const safePuzzle = props.puzzle[0];
  const userId = props.user.id;
  const puzzleTitle = safePuzzle.title;
  const Swal = require("sweetalert2");

  let pick = [];

  function pickNumber(event) {
    event.preventDefault();
    pick.push(event.target.value);
    console.log(event.target.value);
  }

  function enterCode(event) {
    event.preventDefault();
    const picked = pick.join("");
    if (picked === safePuzzle.winCondition) {
      safeCracked();
    } else {
      pick = []
      Swal.fire("Wrong code, try again!")
    }
  }

  function reset(event) {
    event.preventDefault();
    pick = [];
  }

  function safeCracked() {
    API.solved(userId, { puzzleTitle })
      .then(() => {
          Swal.fire("Congrats! You've managed to escape with the keys found in the safe!")
          props.handleSolvedPuzzle('0')
      })
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="safe"
      style={{
        position: "relative",
      }}
    >
      <h1>Crack the safe with a 4 digit code!</h1>
      <div>
            <Route render={() => (
                safePuzzle.isSolved ? (
                <Link to="/scoreBoard" className="btn btn-success">You escaped! Now see how you stack up against other users!</Link>
                ) : ""
            )}/>
            </div>
      <div
        className="box"
        style={{
          position: "absolute",
          right: 0,
        }}
      >
        {/* might need to make pick a state so that it rerenders each time its updated */}
        <div className="screen">****</div>
        <div className="numPad">
          <Row>
            <button className="num" onClick={pickNumber} value="1">
              1
            </button>
            <button className="num" onClick={pickNumber} value="2">
              2
            </button>
            <button className="num" onClick={pickNumber} value="3">
              3
            </button>
          </Row>
          <Row>
            <button className="num" onClick={pickNumber} value="4">
              4
            </button>
            <button className="num" onClick={pickNumber} value="5">
              5
            </button>
            <button className="num" onClick={pickNumber} value="6">
              6
            </button>
          </Row>
          <Row>
            <button className="num" onClick={pickNumber} value="7">
              7
            </button>
            <button className="num" onClick={pickNumber} value="8">
              8
            </button>
            <button className="num" onClick={pickNumber} value="9">
              9
            </button>
          </Row>
          <Row>
            <button className="enter" onClick={reset}>
              Reset
            </button>
            <button className="num" onClick={pickNumber} value="0">
              0
            </button>
            <button className="enter" onClick={enterCode} type="submit">
              Enter
            </button>
          </Row>
        </div>
        <div className="note"
         style={{
          position: "absolute",
          right: 0,
        }}
        >
          <div className="postIt">Dad</div>
        </div>
      </div>
    </div>
  );
}

export default Safe;
