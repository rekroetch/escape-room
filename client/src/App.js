import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect }from 'react';
import API from "./utils/API";
import Welcome from './scenes/Welcome'
import Office from './scenes/Office'
import Bookshelf from './scenes/Bookshelf'
import Painting from './scenes/Painting'
import Desk from './scenes/Desk'
import Safe from './scenes/Safe'
import ScoreBoard from './scenes/ScoreBoard'
import Navbar from './components/Navbar'
import StartPage from "./scenes/StartPage";
import "./App.css";


function App() {
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [formObject, setFormObject] = useState({})
    const [user, setUser] = useState()
    const [puzzles, setPuzzles] = useState()
    const [solvedPuzzles, setSolvedPuzzles] =useState([])
    const puzzleSeed = [
      {
        title: "Safe",
        description: "Enter a 4 digit code to crack the safe and win the game.",
        winCondition: '1219',
        isSolved: false
      },
      {
        title: "Bookshelf",
        description: "Solve the riddle then select the books that correspond to the answer.",
        winCondition: "day and night",
        isSolved: false
      },
      {
        title: "Painting",
        description: "Complete the puzzle to put the painting back together",
        winCondition: "fkajf",
        isSolved: false
      }
    ];

    useEffect(() => {
        jwt && API.validateUser(jwt)
        .then(res => {
          setUser({
            email: res.data.email, 
            id: res.data._id,
          })
          setPuzzles(res.data.puzzles)
          console.log(res.data)
        })
    }, [jwt, solvedPuzzles.length])

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleSolvedPuzzle(puzzleName) {
      const puzzleToUpdate = [...puzzles]
      puzzleToUpdate[puzzleName].isSolved = true
      setPuzzles(puzzleToUpdate)
    }

    // When the form is submitted, use the API.saveUser method to save the User data
    function handleSignUpSubmit(event) {
        event.preventDefault();
        console.log(puzzleSeed);
        API.createUser({
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            email: formObject.email,
            password: formObject.password,
            puzzles: puzzleSeed
        })
        .then(() => {
          API.checkUser({
            email: formObject.email,
            password: formObject.password
          })
          .then(res => {
              setJwt(res.data.token)
          })
          .catch(err => console.log(err));
          })
        .catch(err => console.log(err));
    };

    function handleLogInSubmit(event) {
        event.preventDefault();
        API.checkUser({
            email: formObject.email,
            password: formObject.password
        })
        .then(res => {
            setJwt(res.data.token)
        })
        .catch(err => console.log(err));
    };

    function logout(event) {
      event.preventDefault();
      API.logout({
      })
      .then(setUser(''))
      .catch(err => console.log(err));
    }


  return (
    <Router>
      <Navbar logout={logout} user={user} />
        <Switch>
          <Route exact path="/" render={(props) => user ? (<StartPage {...props} user={user} puzzle={puzzles} />) : (
            <Welcome {...props} user={user} 
            handleInputChange={handleInputChange} 
            handleLogInSubmit={handleLogInSubmit} 
            handleSignUpSubmit={handleSignUpSubmit}
            />)} 
          />
          <Route exact path="/startPage" render={(props) => (
            user ? (<StartPage {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/office" render={(props) => (
            user ? (<Office {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/bookshelf" render={(props) => (
            user ? (<Bookshelf {...props} user={user} handleSolvedPuzzle={handleSolvedPuzzle} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/painting" render={(props) => (
            user ? (<Painting {...props} user={user} handleSolvedPuzzle={handleSolvedPuzzle} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/desk" render={(props) => (
            user ? (<Desk {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/safe" render={(props) => (
            user ? (<Safe {...props} user={user} handleSolvedPuzzle={handleSolvedPuzzle} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/scoreBoard" render={(props) => (
            user ? (<ScoreBoard {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
