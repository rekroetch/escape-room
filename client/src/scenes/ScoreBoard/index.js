import React, {useState, useEffect} from 'react'
import API from "../../utils/API";
import "./style.css"

function ScoreBoard () {

    const [winners, setWinners] = useState([])

    useEffect(() => {
        findUsers()
    }, [])


    function findUsers() {
        API.findAll()
        .then(res => {
            findWinners(res.data)
        })
        .catch(err => console.log(err))
    }

    function findWinners(users) {
        const winnerList = users.filter(user => user.puzzles[0].isSolved)
        const winnerNames = winnerList.map(winner => <li className="list-group-item">{winner.username}</li>)
        setWinners(winnerNames)
    }

    return (
        <div>
        <div className="leader-background">
            <div className="container">
                {/* Plan for future development: this page will show each user in order of the time it took for them to finish the game.*/}
                <div className="winner">
                    WINNERS!
                </div>
                <div className="userName">
                    <ul className="list-group">
                        {winners.length ===0 ? "No one has escaped yet!" : winners}
                    </ul>
                </div>
            </div>
        </div>
        <div className="animated-background">
                <div className="forest">
  
                    <div className="bird-container">
                        <div className="bird"></div>
                    </div>
  
                    <div className="sun"></div>
                    <div className="tree01"></div>
  	                <div className="tree02"></div>
  	                <div className="tree03"></div>
                    <div className="tree04"></div>
  
                    <div className="combi-container">
                        <div className="combi"></div>
                        <div className="wheelshadow"></div>
                        <div className="wheel wheel01" ></div>
                        <div className="wheel wheel02" ></div>
                    </div>
                    {/* <!-- combi-container end --> */}
                    
                </div>
                {/* <!-- forest end --> */}

                <div className="forest-background"></div>
                <div className="road"></div>
            </div>
        </div>
    )
}

export default ScoreBoard