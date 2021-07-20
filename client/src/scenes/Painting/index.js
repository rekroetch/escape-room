import React, {Component} from "react";
import API from "../../utils/API";
import originalImage from "./images/rasterFoxResize.png";
import "./Puzzle.css";
import { Link, Route } from "react-router-dom";

// Painting class
class Painting extends Component {

    constructor(props) {
        super(props);

        // arrays for the shuffled images, the solved board array
        this.state = {
            data: [],
            pieces: [],
            shuffled: [],
            solved: [],
            winCondition: false
        };
    }

    // drop images into array
    componentDidMount() {
        const pieces = [...Array(12)].map((_, i) => ({
            img: `image_part_${("00" + (i + 1)).substr(-3)}.jpg`,
            order: i,
            board: "shuffled"
        }));
        this.setState({
            pieces,
            shuffled: this.shuffledPieces(pieces),
            solved: [...Array(12)]
        });
    }

    // shuffle the pieces
    shuffledPieces = (pieces) =>  {
        const shuffled = [...pieces];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // make element draggable, render piece based on picked up or put down
    displayPiece = (piece, index, boardName) => {
        return (
            <li key = {index} onDragOver = {e => e.preventDefault()}
                onDrop = {e => this.onDrop(e, index, boardName)}>
                {
                    piece && (
                    <img draggable 
                        onDragStart = {e =>this.onDragStart(e, piece.order)}
                        src = {require(`./images/${piece.img}`)}
                        alt="piece of puzzle"
                    />
                    )
                }
        </li>
        );
    }

    onDragStart = (e, order) => {
        e.dataTransfer.setData("text/plain", order);
    }


    // drop the puzzle piece
    onDrop = (e, index, targetName) => {
        let target = this.state[targetName];
        if (target[index]) return;

        const pieceOrder = e.dataTransfer.getData("text");
        const pieceData = this.state.pieces.find(p => p.order === +pieceOrder);
        const origin = this.state[pieceData.board];

        if (targetName === pieceData.board) target = origin;

        origin[origin.indexOf(pieceData)] = undefined;
        target[index] = pieceData;
        pieceData.board = targetName;

        this.setState({[pieceData.board]: origin, [targetName]: target});
    }

    // what happens when you click submit
    onClickHandler = () => {
        const Swal = require("sweetalert2");

        let i = 0
        this.state.solved.map((puzzle, index) => {

          if(this.state.solved[index])
          {
            if (this.state.solved[index].order === index) {
               
                i++
                if(i >= 11) {

                    // const userId = this.props.user.id;
                    const puzzleTitle = this.props.puzzle[2].title;
                        
                    API.solved(this.props.user.id, {puzzleTitle})
                    .then(() => {
                        Swal.fire("The painting moved and a safe appeared")
                        this.props.handleSolvedPuzzle('2')
                    })
                    .catch((err) => console.log(err));
                    this.setState({
                        winCondition: true,
                    })
                }
            } else {
                Swal.fire("Should be some kind of animal, not there yet.")
                this.setState({
                    winCondition: false
                })
            }
        }

        return puzzle;
        })
    }

    render() {
        return (
            <div className = "puzzle" >
                <div>
                <Route render={() => (
                    this.state.winCondition ? (
                    <Link to="/safe" className="btn btn-warning toSafe">Check out the safe</Link>
                    ) : ""
                )}/>
                <div style={{fontSize: "20px", color: "white", padding: "10px"}}>Drag the puzzle pieces to the correct boxes below to solve the puzzle.</div>
                </div>
                {/* List of images for the shuffled board at top */}
                <ul className = "puzzle_shuffled-board" >
                    {
                        this.state.shuffled.map((piece, i) => this.displayPiece(piece, i, "shuffled"))
                    }
                </ul>
                {/* What the solved board should look like, currently the image is not being shown (transparency 100%*/}
                <ol className = "puzzle_solved-board" style = {{ backgroundImage: `url(${originalImage})`}}>
                    {
                        this.state.solved.map((piece, i) => this.displayPiece(piece, i, "solved"))
                    }
                </ol>
                <div>
                    <button type="submit" onClick={this.onClickHandler.bind(this)} className="btn btn-warning">Submit</button>
                </div>
            </div>
        );
    }
}

export default Painting;