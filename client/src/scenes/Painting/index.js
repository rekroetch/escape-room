import React, {Component} from "react";
import API from "../../utils/API";
import originalImage from "./images/rasterFoxResize.png";
import "./Puzzle.css";


class Painting extends Component {

/*     import React, { useEffect, useState } from 'react'
    function Painting (props) {
    
        const [pieces, setPieces] = useState([])
        const [shuffled, setShuffle] = useState([])
        const [solution, setSolution] = useState([])
        const [reply, setReply] = useState([])
    
        useEffect = () => {
    
            const pieces = [...Array(12)].map((_, i) => ({
                img: `image_part_${("00" + (i + 1)).substr(-3)}.jpg`,
                order: i,
                board: "shuffled"
            }));
    
        } 

        */

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pieces: [],
            shuffled: [],
            solved: [],
            reply: "",
            winCondition: false
        };

        console.log(this.props.puzzle[2].title)
        console.log(this.props.user.id)

        this.shuffledPieces = this.shuffledPieces.bind(this);
        this.renderPieceContainer = this.renderPieceContainer.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);

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
    shuffledPieces = (pieces) => {
        const shuffled = [...pieces];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // make element draggable, render piece based on picked up or put down
    renderPieceContainer = (piece, index, boardName) => {
        return (
            <li key = {index} onDragOver = {e => e.preventDefault()}
                onDrop = {e => this.onDrop(e, index, boardName)}>
                {
                    piece && (
                    <img draggable 
                        onDragStart = {e =>this.onDragStart(e, piece.order)}
                        src = {require(`./images/${piece.img}`)}
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
    onClickHandler = () =>  {

        let i = 0
        this.state.solved.map((jigsaw, index) => {
            console.log(this.state.solved[index]);
            console.log(index)

          if(this.state.solved[index])
          {
            if (this.state.solved[index].order === index) {
               
                i++
                if(i >= 11)
                {
                    const userId = this.props.user.id
                  ///  const paintingPuzzle = this.props.puzzle[1]
                   // const paintingTitle = paintingPuzzle.title
                    console.log(this.props.puzzle[2].title)
                    console.log(this.props.user.id)


                 //   API.solved(userId, {paintingTitle}).then(alert("The painting just moved and a safe appears behind it"))
                 //  .catch(err => console.log(err));
                
                    console.log("hit the solution")
                this.setState({
                  
                    reply: "Good job!!"
                })
            }
            } else {
                this.setState({
                    reply: "Not quite!!",
                    winCondition: false
                })
            }
        }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="paintingComponent">
                <div className="jigsaw" >
                    <ul className="jigsaw__shuffled-board" >
                        {

                            this.state.shuffled.map((piece, i) => this.renderPieceContainer(piece, i, "shuffled"))
                        }
                    </ul>
                    <ol className="jigsaw__solved-board" style={{ backgroundImage: `url(${originalImage})` }}>
                        {
                            this.state.solved.map((piece, i) => this.renderPieceContainer(piece, i, "solved"))
                        }
                    </ol>
                    <div>
                        <input type="submit" onClick={this.onClickHandler.bind(this)} />
                        <div style={{ color: "black" }}>
                            {
                                this.state.reply
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Painting;


/* 

    import React, { useEffect, useState } from 'react'
function Painting (props) {

    const [pieces, setPieces] = useState([])
    const [shuffled, setShuffle] = useState([])
    const [solution, setSolution] = useState([])
    const [reply, setReply] = useState([])

    useEffect = () => {

        const pieces = [...Array(12)].map((_, i) => ({
            img: `image_part_${("00" + (i + 1)).substr(-3)}.jpg`,
            order: i,
            board: "shuffled"
        }));

    } 

    constructor() {
        super();
        this.state = {
            pieces: [],
            shuffled: [],
            solved: [],
            reply: ""
        };

        this.shuffledPieces = this.shuffledPieces.bind(this);
        this.renderPieceContainer = this.renderPieceContainer.bind(this);

    }

    componentDidMount() {
        const pieces = [...Array(48)].map((_, i) => ({
            img: `image_part_${("00" + (i + 1)).substr(-3)}.jpg`,
            order: i,
            board: "shuffled"
        }));
        this.setState({
            pieces,
            shuffled: this.shuffledPieces(pieces),
            solved: [...Array(48)]
        });
    }


  const shuffledPieces = (pieces) => {
        const shuffled = [...pieces];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const renderPieceContainer = (piece, index, boardName) => {
        return (
            <li key = {index} onDragOver = {e => e.preventDefault()}
                onDrop = {e => this.onDrop(e, index, boardName)}>
                {
                    piece && (
                    <img draggable 
                        onDragStart = {e =>this.onDragStart(e, piece.order)}
                        src = {require(`./image/${piece.img}`)}
                    />
                    )
                }
        </li>
        );
    }

  const onDragStart = (e, order) => {
        e.dataTransfer.setData("text/plain", order);
    }

  const onDrop = (e, index, targetName) => {
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

   const onClickHandler = () => {
        solved.map((jigsaw, index) => {
            console.log(state.solved.order);
            if (this.state.solved !== undefined && this.state.solved.order === index) {
                this.setState({
                    reply: "Good job!!"
                })
            } else {
                this.setState({
                    reply: "Keep trying!!"
                })
            }
        })
    }



    return (
        <div>
        <h1>Painting</h1>
        <div className = "jigsaw" >
        <ul className = "jigsaw__shuffled-board" >
            {
                shuffled.map((piece, i) => renderPieceContainer(piece, i, "shuffled"))
            }
        </ul>
        <ol className = "jigsaw__solved-board" style = {{ backgroundImage: `url(${originalImage})`}}>
            {
                solved.map((piece, i) => renderPieceContainer(piece, i, "solved"))
            }
        </ol>
        <div>
            <input type = "submit" onClick = {onClickHandler}/>
                <div style = {{color: "white"}}>
                    {
                        this.state.reply
                    }
                </div>
        </div>
    </div>
    </div>
    )
}


export default Painting
*/