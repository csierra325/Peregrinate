// Import React from "react";
import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from "react-router-dom";

//Import Components
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> c58788bc2cacb44eebf088141065b6844279d332
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

<<<<<<< HEAD

//Import styling
import "./App.css";

=======
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
>>>>>>> c58788bc2cacb44eebf088141065b6844279d332


class App extends Component {

 

  render() {

    return (

      <Router>
<<<<<<< HEAD
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
=======
        <div>
          <Nav />
          


          <Route exact path="/" component={Members} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/wishlist/:id" component={Wishlist} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map/:id" component={Maps} />
          <Route exact path="/friends/:id" component={Friends} />
          <Route exact path="/tripplanner/:id" component={TripPlanner} />

>>>>>>> c58788bc2cacb44eebf088141065b6844279d332

          {/* <Route path='/:id' component={Child} /> */}
        </div>

      </Router>
        );
      }
    }
    export default App;
    
    
