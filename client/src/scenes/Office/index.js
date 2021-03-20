import React from 'react';
import { Link, Route } from 'react-router-dom';
import Row from "../../components/Row"
import "./style.css"

function Office (props) {
    return (
        <div className="page">
            <h1>Office</h1>
            <Row>
                <div className="desk">
                    <Route render={() => (
                        props.puzzle[1].isSolved ? (
                            <Link
                                to="/desk"
                                className="nav-link word"
                            >
                                Desk (unlocked)
                            </Link>
                        ) : (
                            <Link
                                to="/office"
                                className="nav-link word"
                            >
                                Desk (locked)
                            </Link>)
                    )}/>
                </div>
                <div className="painting">
                    <Route render={() => (
                        props.puzzle[2].isSolved ? (
                            <Link
                                to="/safe"
                                className="nav-link word"
                            >
                                Safe
                            </Link>
                        ) : (
                            <Link
                                to="/painting"
                                className="nav-link word"
                            >
                                Painting
                            </Link>
                        )
                    )}/>
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


