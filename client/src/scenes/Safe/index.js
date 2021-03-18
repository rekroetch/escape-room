import React, {useState} from 'react'
import Row from "../../components/Row"
import API from '../../utils/API'
import "./style.css"

function Safe () {
    // const [code, setCode] = useState()
    const winCondition = 1219

    let pick = []
    function pickNumber(event) {
        event.preventDefault()
        pick.push(event.target.value)
        console.log(event.target.value)
        
    }

    function enterCode(event) {
        event.preventDefault();
        const picked = parseInt(pick.join(''))
        // setCode(picked)
        if (picked === winCondition) {
            console.log("picked: " + picked)
            console.log("correct!")
            safeCracked()
            // console.log("code: " + code)
        } else {
            console.log("wrong code")
        }
    }

    function reset(event) {
        event.preventDefault();
        pick = []
        console.log("reset")
    }

    function safeCracked() {
        API.safeCracked({
            
        })
    }



    return (
        <div className="box">
            <h1>Crack the safe with a 4 digit code!</h1>
            {/* make a screen to show what theyve entered */}
            <div className="screen">****</div>
            <div className="numPad">
                <Row>
                    <button className="num" onClick={pickNumber} value="1">1</button>
                    <button className="num" onClick={pickNumber} value="2">2</button>
                    <button className="num" onClick={pickNumber} value="3">3</button>
                </Row>
                <Row>
                    <button className="num" onClick={pickNumber} value="4">4</button>
                    <button className="num" onClick={pickNumber} value="5">5</button>
                    <button className="num" onClick={pickNumber} value="6">6</button>
                </Row>
                <Row>
                    <button className="num" onClick={pickNumber} value="7">7</button>
                    <button className="num" onClick={pickNumber} value="8">8</button>
                    <button className="num" onClick={pickNumber} value="9">9</button>
                </Row>
                <Row>
                    <button className="num" onClick={reset} >Reset</button>
                    <button className="num" onClick={pickNumber} value="0">0</button>
                    <button className="enter" onClick={enterCode} type="submit">Enter</button>
                </Row>
            </div>
            <div className="note">
                <div className="postIt">Dad</div>
            </div>
        </div>
    )
}

export default Safe