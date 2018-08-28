import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import NavTabs from "../../components/NavTabs"

class Friends extends Component {
  state = {
    currentPage: "Friends"
  };


  render() {
    return (
      <div className="wrapper">
        <NavTabs />
        <Jumbotron>
          <h1>I'm the friends page!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Friends;
