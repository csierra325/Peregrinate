// import React from "react";
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import NavTabs from "./components/NavTabs"
import Profile from "./pages/Profile";
import Members from "./pages/Members";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Maps from "./pages/Maps";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>       
        <Nav />
    
        <Route exact path="/" component={Members} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/wishlist" component={Wishlist} /> 
        <Route exact path="/login" component={Login} /> 
        <Route path="/map" component={Maps} />
      </div>
      </Router>
    );
  }
}
export default App;


