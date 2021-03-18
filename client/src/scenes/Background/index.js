import React from "react";

function Background (props) {
    return (
        <header>
            <h1>Background</h1>
            <h2>Welcome {props.user ? props.user.email : "not logged in"}</h2>
        </header>
    )
}

export default Background