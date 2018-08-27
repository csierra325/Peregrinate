import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";

import Maps from "../Maps/WorldMap.js";
import Profile from "../Profile/Profile.js"
import TripPlanner from '../TripPlanner';
import Members from "../Members.js";
import Wishlist from "../Wishlist";
import Login from '../Login';



class Friends extends Component {
  state = {
    currentPage: "Friends"
  };


  render() {
    return (
      <div className="wrapper">
        
        <Jumbotron>
          <h1>I'm the friends page!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Friends;
