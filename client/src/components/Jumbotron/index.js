// import "./style.css";
import React from 'react'

function Jumbotron(props) {
    return <main className="jumbotron" style={{background:"#333"}}>{props.children}</main>;
}
  
export default Jumbotron;