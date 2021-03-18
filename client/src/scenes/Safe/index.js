import React from 'react'
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

function Safe () {

    function pickNumber(event) {
        event.preventDefault()
        console.log("clicked")
    }

    return (
        <div className="box">
            <h1>Crack the safe!</h1>
            <div className="numPad">
                <Row>
                    <button className="num" onClick={pickNumber} >1</button>
                    <button className="num" onClick={pickNumber} >2</button>
                    <button className="num" onClick={pickNumber} >3</button>
                </Row>
                <Row>
                    <button className="num" >4</button>
                    <button className="num" >5</button>
                    <button className="num" >6</button>
                </Row>
                <Row>
                    <button className="num" >7</button>
                    <button className="num" >8</button>
                    <button className="num" >9</button>
                </Row>
            </div>
            <div className="note">
                <div className="postIt">Dad</div>
            </div>
        </div>
    )
}

export default Safe