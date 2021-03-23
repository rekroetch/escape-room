import React from 'react'
import "./style.css"

function ScoreBoard (props) {
    // user.findAll routes
    // add time to user moded
    // make timer for game. when safe is cracked timer stops
    // timer needs to be able to be continued if the user leaves the game and logs in again later to continue
    // routes to update user's time (when would this run? onCLick of logout but before the logout happens?  or need a pause/resume button)
    return (
        <div>
            {/* <h1>Leader Board</h1> */}
            {/* <h2>This page will show each user in order of the time it took for them to finish the game.</h2>
            <p>This will most likely be future dev because it will require all new routes and updated models to hold time.  We also do not have a time aspect to the game at all right now so that would need to be implemented first. </p> */}
            <div className="winner">
                WINNER!
            </div>
            <div className="userEmail">{props.user.email}</div>
        </div>
    )
}

export default ScoreBoard