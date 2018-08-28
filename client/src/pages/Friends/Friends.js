import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";

import Maps from "../Maps/WorldMap.js";
import Profile from "../Profile/Profile.js"
import TripPlanner from '../TripPlanner';
import Members from "../Members.js";
import Wishlist from "../Wishlist";
import Login from '../Login';
import "./friends.css";
import CurrentFriends from "../../components/CurrentFriends/currentfriends";
import FriendsSearch from "../../components/FriendSearch/friendsearch";
// import FriendsResult from "../../components/FriendsResult/friendsresult";



class Friends extends Component {
  state = {
    currentPage: "Friends"
  };


  render() {
    return (
      <div className="wrapper">
        
        <Jumbotron>
          <h1>I'm the friends page!</h1>
          <CurrentFriends />
          <FriendsSearch />
          {/* <FriendsResult /> */}
        </Jumbotron>
       
      </div>
    );
  }
}

export default Friends;
