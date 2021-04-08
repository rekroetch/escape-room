import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import Row from "../../components/Row";
import API from "../../utils/API";
import "./style.css";

function Safe(props) {
  const safePuzzle = props.puzzle[0];
  const userId = props.user.id;
  const puzzleTitle = safePuzzle.title;
  const Swal = require("sweetalert2");
  const [code, setCode] = useState([])


  function pickNumber(event) {
    event.preventDefault();
    setCode([...code, event.target.value])
  };

  function enterCode(event) {
    event.preventDefault();
    if (code.join('') === safePuzzle.winCondition) {
      safeCracked();
    } else {
    setCode([])
      Swal.fire("Wrong code, try again!");
    }
  };

  function reset(event) {
    event.preventDefault();
    setCode([])
  };

  function safeCracked() {
    API.solved(userId, { puzzleTitle })
      .then(() => {
        Swal.fire(
          "Congrats! You've managed to escape with the keys found in the safe!"
        );
        props.handleSolvedPuzzle("0");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="safe"
      style={{
        position: "relative",
      }}
    >
      <div
        className="crack"
        style={{
          position: "absolute",
          right: "150px",
          bottom: "1015px"
        }}
      >
        Crack the safe with a 4 digit code!
      </div>
      <div>
        <Route
          render={() =>
            safePuzzle.isSolved ? (
              <Link to="/scoreBoard" className="btn btn-warning next">
                You escaped! Now see how you stack up against other users!
              </Link>
            ) : (
              ""
            )
          }
        />
      </div>
      <div
        className="box"
        style={{
          position: "absolute",
          right: 0,
        }}
      >
        <div className="screen">{code}</div>
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
        <div
          className="note"
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          <div
            className="postIt"
            style={{
              position: "absolute",
              right: "-76px",
            }}
          >
            Dad
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safe;
