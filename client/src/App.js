import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
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
import StartPage from "./scenes/StartPage";

function App() {

  return (
    <Router>
      <Navbar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/office" component={Office} />
        <Route exact path="/bookshelf" component={Bookshelf} />
        <Route exact path="/painting" component={Painting} />
        <Route exact path="/desk" component={Desk} />
        <Route exact path="/safe" component={Safe} />
        <Route exact path="/scoreBoard" component={ScoreBoard} />
        <Route exact path="/startPage" component={StartPage} />
    </Router>
  );
}

export default App;
