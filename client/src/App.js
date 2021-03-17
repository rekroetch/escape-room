import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import React, { useState, useEffect }from 'react';
import API from "./utils/API";
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


function App(props) {
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [formObject, setFormObject] = useState({})
    const [user, setUser] = useState()
    const [scene, setScene] = useState({})

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
      console.log("logout")
      API.logout({
      })
      .then(setUser(''))
      .catch(err => console.log(err));
    }


  return (
    <Router>
      <Navbar logout={logout}/>
        <Switch>
          <Route exact path="/" 
            render={(props) => (
            <Welcome {...props} 
            user={user} 
            handleInputChange={handleInputChange} 
            handleLogInSubmit={handleLogInSubmit} 
            handleSignUpSubmit={handleSignUpSubmit}
            />)} 
          />
          <Route exact path="/background" render={() => (
            user ? (<Background />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/office" render={() => (
            user ? (<Office />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/bookshelf" render={() => (
            user ? (<Bookshelf />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/painting" render={() => (
            user ? (<Painting />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/desk" render={() => (
            user ? (<Desk />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/safe" render={() => (
            user ? (<Safe />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/scoreBoard" render={() => (
            user ? (<ScoreBoard />) : (<Redirect to="/" />)
          )}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
