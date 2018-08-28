import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";

// console.log(this.props.history.location.pathname);


class Friends extends Component {

  state = {
    currentPage: "Friends",
    username: this.props.match.params.id
  };

  // componentDidMount() {
  //   this.onPageLoad();
  // }

  // onPageLoad = () => {
  //   this.location.pathname = "/friends/" + localStorage.getItem("username");
  // }

  render() {
    return (
      <div className="wrapper">

        <Jumbotron>
          <h2><strong>{this.state.username}</strong></h2>
          <h1>I'm the friends page!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Friends;
