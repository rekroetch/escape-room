import React from 'react'
import "./style.css"

function Desk () {
    return (
        <div className="tableTop">
            <div className="deskTitle">Take a close look at the items on the desk!</div>
            <div className="calendarBox"> 
                <div className="december">December</div>
                <div className="dates">
                    <hr></hr>
                    <div>1 Dentist</div>
                    <hr></hr>
                    <div>8</div>
                    <hr></hr>
                    <div>15
                        <div className="dad"> 19 Dad's B-Day</div>
                    </div>
                    <hr></hr>
                    <div>22</div>
                    <hr></hr>
                    <div>29 Zoo</div>
                </div>
            </div>
            <div className="book">Sherlock Holmes
                <div>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="cup"></div>
        </div>
    )
}

export default Desk