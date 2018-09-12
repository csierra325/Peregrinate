import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import Greeting from "../../components/Greeting";
import ProfileCard from "../../components/ProfileCard";
import ProfileForm from "../../components/ProfileForm";
import NavTabs from "../../components/NavTabs";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class Profile extends Component {
  state = {
    currentPage: "Profile",
    username: window.username,
    modal: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="wrapper">
        <NavTabs />

        <Jumbotron>
          <Greeting username={this.state.username} />
          {/* <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Welcome to Your Profile Page</ModalHeader>
              <ModalBody>
                Fill out the form below to update your profile and save your preferred travel information! Don't forget to add a profile image if you would like!
              </ModalBody>
            </Modal>
          </div> */}

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
