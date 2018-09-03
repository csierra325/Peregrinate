import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./friends.css";
import CurrentFriends from "../../components/CurrentFriends/currentfriends";
import FriendsSearch from "../../components/FriendSearch/friendsearch";
// import FriendsResult from "../../components/FriendsResult/friendsresult";


import NavTabs from "../../components/NavTabs"

class Friends extends Component {

  state = {
    currentPage: "Friends",
    username: window.username,
  };



  

  // componentDidMount() {
  //   this.onPageLoad();
  // }

  // onPageLoad = () => {
  //   this.location.pathname = "/friends/" + localStorage.getItem("username");
  // }

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     // execute AJAX request for current friends
  //     // -> .then setState for friendSearchResults to response from AJAX request
  // }

  render() {
    
    window.username = this.state.username;

    return (
      <div className="wrapper">
        <NavTabs />
        <Jumbotron>
          <h2><strong>{this.state.username}</strong></h2>
          <h1>I'm the friends page!</h1>
          <CurrentFriends />
          <FriendsSearch handleFormSubmit={this.handleFormSubmit} />
          {/* <FriendsResult results={this.state.friendSearchResults} /> */}

        </Jumbotron>
       
      </div>
    );
  }
}

export default Friends;
