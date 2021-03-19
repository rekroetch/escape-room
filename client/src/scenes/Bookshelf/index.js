import React from 'react'
import Draggable from 'react-draggable';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import  Shelf  from './dropShelf'
import  Book  from './books'


export default class BookShelf extends React.Component {
  render() {

    // we will use this as a custom drag element

    return (
      <div className='drag_books_to_shelf'>
        <h2>Solve the riddle by dragging the correct books to the bookshelf</h2>
        <div className="books">
          <Book targetKey="DayAndNight" draggable="true" image="images/nightBookSmall.png"/>
          <Book targetKey="DayAndNight"  image="images/dayBookSmall.png"/>
          <Book targetKey="random" image="images/blueBookSmall.png"/>
          <Book targetKey="random" image="images/redBookSmall.png"/>
        </div>
        <div className="bookshelf">
            <Shelf targetKey="DayAndNight">
              <img src="images/bookshelf.jpg" width="600"/>
              <h5>Put Riddle here</h5>
            </Shelf>
          </div>
          </div>
    )
  }
}


