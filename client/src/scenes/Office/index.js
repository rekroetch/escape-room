import React from 'react'
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import "./style.css"

function Office () {
    return (
        <div className="page">
            <h1>Office</h1>
            <Row>
                {/* need to add condition that user has the key from bookshelf puzzle */}
                <div className="desk">
                    <Link
                        to="/desk"
                        className="nav-link word"
                    >
                        Desk
                    </Link>
                </div>
                {/* need to add reroute to safe if painting is already solved */}
                <div className="painting">
                    <Link
                        to="/painting"
                        className="nav-link word"
                    >
                        Painting
                    </Link>
                </div>
                <div className="bookshelf">
                    <Link
                        to="/bookshelf"
                        className="nav-link word"
                    >
                        Bookshelf
                    </Link>
                </div>    
            </Row>
        </div>

    )
}

export default Office