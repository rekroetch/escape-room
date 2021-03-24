  import React from 'react'
  import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
  import Draggable from 'react-draggable';
  import  Shelf  from './dropShelf'



  export default class BookShelf extends React.Component {
    
    constructor(props) {
      super(props)
    }
    
    render() {


  return (
    <div className="books" style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      margin: "15px"
    }}>
      <h1 style={{ fontSize: "30px", margin: "15px" }}>What breaks yet never falls, and what falls yet never breaks?</h1>
      <h3 style={{ margin: "15px" }}>Drag the correct books onto the shelf</h3>
      <div className="droppableBooks" style={{ display: "flex" }}>


        <DragDropContainer>
  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div>
      <img className="handle" src={require('./images/redBookSmall.png')} alt="Book with triangle symbol"></img>
    </div>
  </Draggable>
  </DragDropContainer>

  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}
    >
    <div>
      <img className="handle" src={require('./images/blueBookSmall.png')}></img>
    </div>
  </Draggable>

  <DragDropContainer
        targetKey = "DayAndNight">
    <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
      <div>
      <img className="handle" src={require('./images/dayBookSmall.png')} alt="Book with day symbol"></img>
      </div>
  </Draggable>
  </DragDropContainer>

  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div>
      <img className="handle" src={require('./images/greenBookSmall.png')} alt="Book with triangle symbol"></img>
    </div>
  </Draggable>

  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div>
      <img className="handle" src={require('./images/pinkBookSmall.png')} alt="Book with triangle symbol"></img>
    </div>
  </Draggable>

  <DragDropContainer
        targetKey = "DayAndNight">
  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div>
      <img className="handle" src={require('./images/nightBookSmall.png')} alt="Book with night symbol"></img>
    </div>
  </Draggable>
  </DragDropContainer>

  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div>
      <img className="handle" src={require('./images/brownBookSmall.png')} alt="Book with triangle symbol"></img>
    </div>
  </Draggable>

  <Draggable
    axis="both"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div>
      <img className="handle" src={require('./images/grayBookSmall.png')} alt="Book with triangle symbol"></img>
    </div>
  </Draggable>
  </div>


  <Shelf targetKey="DayAndNight" 
      onHit={this.dropped}
      onDragEnter={this.highlight}
      onDragLeave={this.unHighlight}

      >
        <img className="handle" src={require('./images/bookshelf.jpg')} alt="Book with night symbol"></img>
          </Shelf>
          </div>

  )
  }
  }