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

//Import styling
import "./App.css";


const IsComponentAuthenticated = (props) => {
  const path = props.path;
  const Component = props.component;

  const isAuthenticated = window.isAuthenticated || false;
  // localStorage.getItem('isAuthenticated')
  // const isAuthenticated = localStorage.getItem('isAuthenticated') || false;

  if (isAuthenticated) {
    return (
      <Route path={path} component={Component} />
    );
  }

  return <Redirect to='/login' />
  // return this.props.history.push('/login')
};



class App extends Component {
  componentDidMount() {
    API.getUser()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  render() {

    return (

      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Members} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />

          {/* <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/wishlist/:id" component={Wishlist} />
          <Route exact path="/map/:id" component={Maps} />
          <Route exact path="/friends/:id" component={Friends} />
          <Route exact path="/tripplanner/:id" component={TripPlanner} /> */}


          


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


