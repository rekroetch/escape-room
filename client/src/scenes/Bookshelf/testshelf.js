

/* class Bookshelf extends React.Component { */
/*
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
  
  render() {
    return (
      <div>

      <DragDropContainer targetKey="foo" >
      <img className="handle" src={require('./images/dayBookSmall.png')} alt="Book with day symbol"></img>
</DragDropContainer>
<DropTarget targetKey="foo" 
    onHit={this.dropped}
    onDragEnter={this.highlight}
    onDragLeave={this.unHighlight}
    >
      <div className="my_target"></div>
    <img src={require('./images/bookshelf.jpg')} alt="Drag two books that answer the riddle onto this bookshelf"></img>
</DropTarget>
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
          {/* <div className="handle">Drag from here</div> 
          <img className="handle" src={require('./images/dayBookSmall.png')} alt="Book with day symbol"></img>
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
          <img className="handle" src={require('./images/nightBookSmall.png')} alt="Book with night symbol"></img>
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
          <img className="handle" src={require('./images/redBookSmall.png')} alt="Book with triangle symbol"></img>
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
          <img className="handle" src={require('./images/blueBookSmall.png')}></img>
        </div>
      </Draggable>
        <h1>Bookshelf</h1>
        </div>
    )
}

}


return (
      <div className="bookShelfPuzzle">
      <img src={require('./images/bookshelf.jpg')} alt="Drag two books that answer the riddle onto this bookshelf">
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
               <div className="handle">Drag from here</div> 
                <img className="handle" src={require('./images/dayBookSmall.png')} alt="Book with day symbol"></img>
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
                <img className="handle" src={require('./images/nightBookSmall.png')} alt="Book with night symbol"></img>
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
                <img className="handle" src={require('./images/redBookSmall.png')} alt="Book with triangle symbol"></img>
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
                <img className="handle" src={require('./images/blueBookSmall.png')}></img>
              </div>
            </Draggable>
            
      <div className='drag_books_to_shelf'>
        <h2>Solve the riddle by dragging the correct books to the bookshelf</h2>
          <Book targetKey="DayAndNight" draggable='true' image="nightBookSmall.png"/>
          <Book targetKey="DayAndNight" draggable='true'   image="dayBookSmall.png"/>
          <Book targetKey="random" draggable='true'  image="./blueBookSmall.png"/>
          <Book targetKey="random" draggable='true'  image="./redBookSmall.png"/>
      
      <div className="bookShelfPuzzle">
            <Shelf targetKey="DayAndNight">
              <img src="bookshelf.jpg" width="600"/>
              <h5>Put Riddle here</h5>
            </Shelf>
            </div>
            )
  }
}

  <div className="foods">
      <Book targetKey="DayAndNight"  image="dayBookSmall.png"/>
      <Book targetKey="DayAndNight"  image="dayBookSmall.png"/>
      <Book dragClone={true} dragElemOpacity={0.4} targetKey="dogFood"  image="img/surprise.png"/>
      <Book customDragElement={customElem} targetKey="fruitsAndVeggies"  image="img/banana.png"/>
    </div>

        <Shelf targetKey="DayAndNight" >
          <h5>I eat fruit</h5>
        </Shelf>

        <Shelf targetKey="dogFood" name="Skippy">
          <img src="images/nightBookSmall.png" width="100"/>
          <h5>I eat meat & pickles</h5>
        </Shelf>
 */

