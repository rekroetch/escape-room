import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';



export default class Book extends React.Component {
    landedOn(e) {
      console.log('I was dropped on ' + e.dropData.name)
      console.log({'onDrop event passed back to Food': e});
    }
  
    render() {
      // note use of render prop below, rather than child element
      return (
        <DragDropContainer
          targetKey={this.props.targetKey}
          dragClone={this.props.dragClone || false}
          dragData={{label: this.props.label, solved: this.props.solved}}
          onDrop={this.landedOn}
          render = {() => {
            return <img src={this.props.image} height="600" style={{ marginLeft: 40}}/>
          }}
        />
          
      );
    }
  }
