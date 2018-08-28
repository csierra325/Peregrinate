import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
<<<<<<< HEAD
import NavTabs from "../../components/NavTabs"
=======

// console.log(this.props.history.location.pathname);

>>>>>>> 97659e4e28c028503b21bc9c91cad4dcc9a7be5e

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
<<<<<<< HEAD
        <NavTabs />
=======

>>>>>>> 97659e4e28c028503b21bc9c91cad4dcc9a7be5e
        <Jumbotron>
          <h2><strong>{this.state.username}</strong></h2>
          <h1>I'm the friends page!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Friends;
