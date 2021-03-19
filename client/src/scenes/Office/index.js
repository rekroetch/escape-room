import React from 'react';
import { Route, Link } from 'react-router-dom';
import Row from "../../components/Row"
import "./style.css"

function Office () {
    return (
        <div className="page">
            <h1>Office</h1>
            <Row>
                {/* need to add condition that user has the key from bookshelf puzzle */}
                <div className="desk">
                    <Route render={({ history}) => (
                        <Link className="nav-link word" onClick={() => { history.push('/desk') }}>
                            Desk
                        </Link>
                    )} />
 
                </div>
                {/* need to add reroute to safe if painting is already solved */}
                <div className="painting">
                    <Route render={({ history}) => (
                        <Link className="nav-link word" onClick={() => { history.push('/painting') }}>
                            Painting
                        </Link>
                    )} />
                </div>
                <div className="bookshelf">
                <Route render={({ history}) => (
                    <Link className="nav-link word" onClick={() => { history.push('/bookshelf') }}>
                        Bookshelf
                    </Link>
                )} />
                </div>    
            </Row>
        </div>
        
    )
}

export default Office


