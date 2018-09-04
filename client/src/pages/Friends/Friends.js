import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";

import CurrentFriends from "../../components/CurrentFriends/currentfriends";
import FriendsSearch from "../../components/FriendSearch/friendsearch";
import FriendsResult from "../../components/FriendsResult/friendsresult";

import NavTabs from "../../components/NavTabs";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class Friends extends Component {
  state = {
    currentPage: "Friends",
    username: window.username,
    currentfriends: [],
    modal: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
    return (
      <div className="wrapper">
        <NavTabs />
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Welcom to Your Friends Page</ModalHeader>
            <ModalBody>
              Here you can request a friend. Making new friends is part of the fun when traveling!
            </ModalBody>
          </Modal>
        </div>
        <Jumbotron>
          <h2>
            <strong>{this.state.username}</strong>
          </h2>
          <h1>I'm the friends page!</h1>
          <CurrentFriends />
          <FriendsSearch handleFormSubmit={this.handleFormSubmit} />
          {/* <FriendsResult results={this.state.friendSearchResults} /> */}
          <FriendsResult />
        </Jumbotron>
      </div>
    );
  }
}

export default Friends;
