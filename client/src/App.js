// Import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";

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
          


          <Route exact path="/" component={Members} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/wishlist/:id" component={Wishlist} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map/:id" component={Maps} />
          <Route exact path="/friends/:id" component={Friends} />
          <Route exact path="/tripplanner/:id" component={TripPlanner} />


        </div>

      </Router>
        );
      }
    }
    export default App;
    
    
