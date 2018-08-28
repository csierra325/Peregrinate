import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
<<<<<<< HEAD
// import Form from "../../components/Form";
import Greeting from "../../components/Greeting";
import ProfileCard from "../../components/ProfileCard";
import ProfileForm from "../../components/ProfileForm";
=======
import Form from "../../components/Form";
import Login from '../Login';
import NavTabs from "../../components/NavTabs"
>>>>>>> c58788bc2cacb44eebf088141065b6844279d332

class Profile extends Component {
  state = {
    currentPage: "Profile",
    username: this.props.match.params.id
  };

  render() {
    return (
<<<<<<< HEAD
=======
      <div className = "wrapper">
        <NavTabs />
>>>>>>> c58788bc2cacb44eebf088141065b6844279d332
      <Jumbotron>
        <Greeting />
        
          <div class="rowD">
            <div className="col-s-3">
           
              <ProfileCard />
              </div>
              <div className="col-s-9">
              <ProfileForm />
              </div>

              
              
            
          </div>
        
      </Jumbotron>
    );
  }
}

export default Profile;
