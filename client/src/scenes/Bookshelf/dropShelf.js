import React from 'react';
import { DropTarget } from 'react-drag-drop-container';
import API from "../../utils/API";

var howManyBooks = 0

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
        this.setState({ howManyBooks: this.howManyBooks+1})

        howManyBooks++

        console.log({'book hit target':e});
        if(howManyBooks > 1)
        {
            const bookShelfPuzzle = this.props.puzzle[1];
            const userId = this.props.user.id;
            const puzzleTitle = bookShelfPuzzle.title;
                
            API.solved(userId, {puzzleTitle}).then(alert("Day and Night!"))
            .catch((err) => console.log(err));
        
        this.setState({message: "You solved the riddle!"})
        }
    };

    render() {
        return (
        <DropTarget 
            onHit={this.dropped}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}    
        >
            <img src="bookshelf.jpg" alt="bookshelf"></img>
            <div className='bookshelfPuzzle'>
                    {this.state.message}
          
                {this.props.children}
                </div>
            
        </DropTarget>
        );
    }
}
export default Shelf;