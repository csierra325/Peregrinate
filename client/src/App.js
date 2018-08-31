// Import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import API from "./utils/API";

//Import pages for navigation
import Profile from "./pages/Profile";
import Members from "./pages/Members";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Maps from "./pages/Maps";
import Friends from './pages/Friends';
import TripPlanner from './pages/TripPlanner';
import About from "./pages/About";
import Contact from "./pages/Contact";

//Import styling
import "./App.css";


class App extends Component {
  componentDidMount() {
    const id = "5b88531ffde72333acdf6b5c";
    API.getUser(id)
      .then(console.log)
      // .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

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
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />


        </div>

      </Router>
    );
  }
}
export default App;


