import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';



export default class Book extends React.Component {
    landedOn(e) {
      console.log('I was dropped on ' + e.dropData.name)
    }
  
    render() {
      // note use of render prop below, rather than child element
      return (
        <DragDropContainer
          targetKey={this.props.targetKey}
          dragData={{label: this.props.label}}
          customDragElement={this.props.customDragElement}
          onDrop={this.landedOn}
          render = {() => {
            return <img src={this.props.image} height="250" />
          }}
        />
          
      );
    }
  }
