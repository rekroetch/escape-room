import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import React, { useState, useEffect }from 'react';
import API from "./utils/API";
import auth from "./auth"
import "./App.css";
import Welcome from './scenes/Welcome'
import Background from './scenes/Background'
import Office from './scenes/Office'
import Bookshelf from './scenes/Bookshelf'
import Painting from './scenes/Painting'
import Desk from './scenes/Desk'
import Safe from './scenes/Safe'
import ScoreBoard from './scenes/ScoreBoard'
import Navbar from './components/Navbar'
// import auth from "./auth"


function App(props) {
  const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({})
    const [user, setUser] = useState()

    useEffect(() => {
        jwt && API.validateUser(jwt)
        .then(res => setUser(res.data))
    }, [jwt])

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    // When the form is submitted, use the API.saveUser method to save the User data
    function handleSignUpSubmit(event) {
        event.preventDefault();
        API.createUser({
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            email: formObject.email,
            password: formObject.password
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

    // doesnt actually work, can put in anything you want and be "logged in"
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

  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" 
            render={(props) => (
            <Welcome {...props} 
            user={user} 
            handleInputChange={handleInputChange} 
            handleLogInSubmit={handleLogInSubmit} 
            handleSignUpSubmit={handleSignUpSubmit}
            />)} />
          <ProtectedRoute exact path="/background" component={Background} />
          <ProtectedRoute exact path="/office" component={Office} />
          <ProtectedRoute exact path="/bookshelf" component={Bookshelf} />
          <ProtectedRoute exact path="/painting" component={Painting} />
          <ProtectedRoute exact path="/desk" component={Desk} />
          <ProtectedRoute exact path="/safe" component={Safe} />
          <ProtectedRoute exact path="/scoreBoard" component={ScoreBoard} />
        </Switch>
    </Router>
  );
}

export default App;
