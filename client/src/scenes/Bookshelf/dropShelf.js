import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';



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

        console.log({'book hit target':e});
        if(this.howManyBooks > 1)
        {
        this.setState({message: "You solved the riddle!",
      solved:true})
        
        }
    };

    render() {
        return (
        <DropTarget
            onHit={this.dropped}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}
        >
            <div className='bookshelf'>
            <img src= "images/bookshelf.jpg"></img>
                    {this.state.message}
                </div>
                {this.props.children}
            
        </DropTarget>
        );
    }
}
export default Shelf;