import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

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