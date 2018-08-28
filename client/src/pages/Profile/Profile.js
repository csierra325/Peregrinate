import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import Form from "../../components/Form";
import Login from '../Login';
import NavTabs from "../../components/NavTabs"

class Profile extends Component {
  state = {
    currentPage: "Profile",
    username: this.props.match.params.id
  };

  render() {
    return (
      <div className = "wrapper">
        <NavTabs />
      <Jumbotron>
        <h1>I'm the profile page!</h1> 
        <Form />
        </Jumbotron>
       
      </div>

    )
  }
};

export default Profile;