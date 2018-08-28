import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
// import Form from "../../components/Form";
import Greeting from "../../components/Greeting";
import ProfileCard from "../../components/ProfileCard";
import ProfileForm from "../../components/ProfileForm";
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
        <Greeting />
        
          <div class="rowD">
            <div className="col-s-3">
           
              <ProfileCard />
              </div>
              <div className="col-s-9">
              <ProfileForm />
              </div>
          </div>
<<<<<<< HEAD
         
        
      </Jumbotron>
      </div> 
=======
          
        
      </Jumbotron>
      </div>
>>>>>>> caa3a21f82cc5b9728a78e30b88b1615ffa1f7fa
    );
  }
}

export default Profile;
