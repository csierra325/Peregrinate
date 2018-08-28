// Import React from "react";
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

//Import Components
import Nav from "./components/Nav";
import NavTabs from "./components/NavTabs/NavTabs";


//Import pages for navigation
import Profile from "./pages/Profile";
import Members from "./pages/Members";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Maps from "./pages/Maps";
import Friends from './pages/Friends';
import TripPlanner from './pages/TripPlanner';


//Import styling
import "./App.css";



class App extends Component {

 

  render() {
    return (
      <Router>
        <div>       
        <Nav />
        <NavTabs />
        
    
        <Route exact path="/" component={Members} />
        {/* for testing purposes deployed will need to be "/profile/:id" */}
        <Route exact path="/profile" component={Profile} />  
        <Route exact path="/wishlist" component={Wishlist} /> 
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/map" component={Maps} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/tripplanner" component={TripPlanner} />
      </div>

      </Router>

      
    );
  }
}
export default App;


