// import React from "react";
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Members from "./pages/Members";
import Wishlist from "./pages/Wishlist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>       
        <Nav />
        <Route exact path="/" component={Members} />
        <Route exact path="/wishlist" component={Wishlist} /> 
      </div>
      </Router>
    );
  }
}
export default App;


