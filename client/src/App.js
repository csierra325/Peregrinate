// Import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import About from "./pages/About";
import Contact from "./pages/Contact";

//Import styling
import "./App.css";

// import Profile from "./pages/Profile/Profile";
console.log(Profile.state);

// const Child = ({match}) =>(
//   <div>
//     <h3>{match.params.id}</h3>
//   </div>
// )
var username = localStorage.getItem("username");


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
          <Route exact path = "/About" component = {About}/>
          <Route exact path = "/Contact" component = {Contact}/>


          {/* <Route path='/:id' component={Child} /> */}
        </div>

      </Router>
        );
      }
    }
    export default App;
    
    
