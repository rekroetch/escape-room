import React from "react";
import { Link } from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            buttonPressed: 0
            // 0 could be your default view
        }
    }

    handleClick = (button) => {
        this.setState({ buttonPressed: button })
    }

    render() {
        return(
            <button 
                 className='button1' 
                 onClick={() => this.handleClick(1)}
             > Bookshelf
             </button>

             //put in the rest of your buttons here

             //add conditional rendering based on this.state.buttonPressed
        )
    }
}
