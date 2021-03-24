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

    dropped = (e) => {
        e.containerElem.style.visibility="hidden";
     
        this.setState({ howManyBooks: this.state.howManyBooks+1})

        const Swal = require("sweetalert2");

        if(this.state.howManyBooks > 1)
        {
            const bookShelfPuzzle = this.props.puzzle[1];
            const userId = this.props.user.id;
            const puzzleTitle = bookShelfPuzzle.title;
                
            API.solved(userId, {puzzleTitle}).then(() => {
                this.props.handleSolvedPuzzle('1')
                Swal.fire("Day and Night!")
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
                    {this.state.message}
          
                {this.props.children}
                </div>
            
        </DropTarget>
        );
    }
}
export default Shelf;