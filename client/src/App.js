// Import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom'
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
import Packinglist from "./pages/Packinglist";
import Travelideas from "./pages/Travelideas";
//Import styling
import "./App.css";

const IsComponentAuthenticated = ({ component: Component, ...rest }) => {
  const isAuthenticated = window.isAuthenticated || false;
  return <Route {...rest} render={(props) => (
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
};

class App extends Component {
  componentDidMount() {
    API.getUser(window.id)
      .then(console.log)
      .catch(err => console.log(err));
  }

  render() {
    
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Members} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path = "/packinglist/:id" component = {Packinglist}/>
          <Route exact path = "/travelideas/:id" component = {Travelideas} />

          <IsComponentAuthenticated path="/tripplanner/:id" component={TripPlanner} />
          <IsComponentAuthenticated path='/packinglist/:id' component={Packinglist} />
          <IsComponentAuthenticated path='/profile/:id' component={Profile} />
          <IsComponentAuthenticated path='/wishlist/:id' component={Wishlist} />
          <IsComponentAuthenticated path='/map/:id' component={Maps} />
          <IsComponentAuthenticated path='/friends/:id' component={Friends} />
          <IsComponentAuthenticated path='/tripplanner/:id' component={TripPlanner} />

        </div>
      </Router>
    );
  }
}
export default App;


