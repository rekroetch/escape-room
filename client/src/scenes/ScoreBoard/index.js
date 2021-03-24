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
        const winnerNames = winnerList.map(winner => <li className="list-group-item">{winner.firstName}</li>)
        setWinners(winnerNames)
    }

    return (
        <div className="container">
            {/* Plan for future development: this page will show each user in order of the time it took for them to finish the game.*/}
            <div className="winner">
                WINNERS!
            </div>
            <div className="userEmail">
                <ul className="list-group">
                    {winners.length ===0 ? "No one has escaped yet!" : winners}
                </ul>
            </div>
        </div>
    )
}

export default ScoreBoard