import "./style.css";
import React from 'react'

function Card(props) {
  return (
    <div className="card">{props.children}</div>
  );
}

export default Card;