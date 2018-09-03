import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";

import Greeting from "../../components/Greeting";
import ProfileCard from "../../components/ProfileCard";
import ProfileForm from "../../components/ProfileForm";
import NavTabs from "../../components/NavTabs"
import Modal from "../../components/Modal"

class Profile extends Component {
  state = {
    currentPage: "Profile",
    username: window.username
  };

  

  render() {
    return (
      <div className="wrapper">
      
        <NavTabs />
        <Modal />
      <Jumbotron>
        <Greeting username={this.state.username}/>
        
          <div class="rowD">
            <div className="col-s-3">
              <ProfileCard />
            </div>
            <div className="col-s-9">
              <ProfileForm />
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Profile;
