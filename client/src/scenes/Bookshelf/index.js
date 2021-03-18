import React from 'react'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class Bookshelf extends React.Component {

    constructor() {

      //  imgSrc = ".images/dayBook.png"

    super();
}

    
eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

 handleDrag = (e, data) => {
  e.preventDefault()
  console.log(e, data)

  }

 handleStop = (e, data) => {

  console.log(e, data)
  

  if(this.position == [8,9]) {

  }
}

  render() {
    return (
        <div>
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <img className="handle" src={require('./images/dayBookSmall.png')}></img>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <img className="handle" src={require('./images/nightBookSmall.png')}></img>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <img className="handle" src={require('./images/redBookSmall.png')}></img>
        </div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <img className="handle" src={require('./images/blueBookSmall.png')}></img>
        </div>
      </Draggable>
        <h1>Bookshelf</h1>
        </div>
    )
}

}

export default Bookshelf