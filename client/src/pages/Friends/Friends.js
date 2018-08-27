import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";


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
