// import React from "react";
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Members from "./pages/Members";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>       
        <Nav />
        <Route exact path="/" component={Members} />
        <Route exact path="/wishlist" component={Wishlist} /> 
        <Route exact path="/Login" component={Login} /> 
        <Route path="/map" component={Maps} />
      </div>
      </Router>
    );
  }
}
export default App;


