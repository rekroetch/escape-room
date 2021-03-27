import React from 'react';
import { DropTarget } from 'react-drag-drop-container';
import API from "../../utils/API";


 class Shelf extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          message: '',
          howManyBooks: 0,
          solved: false};

    }

    // logic for dropping the correct book on the shelf
    
    dropped = (e) => {
        e.containerElem.style.visibility="hidden";

        this.setState({ howManyBooks: this.state.howManyBooks+1})
 
        const Swal = require("sweetalert2");

        // if both correct books dropped, then puzzle won
        if(this.state.howManyBooks > 1)
        {
            const puzzleTitle = this.props.puzzle[1].title;
            const userId = this.props.user.id;
   
            API.solved(userId, {puzzleTitle}).then(() => {
                this.props.handleSolvedPuzzle('1')
                Swal.fire("Answer: Day and Night\nYou found a key in one of the books!")
            })
            .catch((err) => console.log(err));
        }
    };

    render() {
        return (
        <DropTarget 
            onHit={this.dropped}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}    
        >

            <div className='bookshelfPuzzle'>
                {this.props.children}
                </div>
            
        </DropTarget>
        );
    }
}
export default Shelf;