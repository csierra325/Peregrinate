import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";

import CurrentFriends from "../../components/CurrentFriends/currentfriends";
import FriendsSearch from "../../components/FriendSearch/friendsearch";
import FriendsResult from "../../components/FriendsResult/friendsresult";

<<<<<<< HEAD
import NavTabs from "../../components/NavTabs";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
=======
import NavTabs from "../../components/NavTabs"
>>>>>>> 9ea044168dea22bc90f7ab2b945ebf6bcb7b26a3

class Friends extends Component {
  state = {
    currentPage: "Friends",
    username: window.username,
    currentfriends: [],
    modal: true
  };

<<<<<<< HEAD
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

=======
>>>>>>> 9ea044168dea22bc90f7ab2b945ebf6bcb7b26a3
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
<<<<<<< HEAD
          <h2>
            <strong>{this.state.username}</strong>
          </h2>
          <h1>I'm the friends page!</h1>
          <CurrentFriends />
          <FriendsSearch handleFormSubmit={this.handleFormSubmit} />
          {/* <FriendsResult results={this.state.friendSearchResults} /> */}
          <FriendsResult />
=======
          {/* <h2><strong>{this.state.username}</strong></h2>
          <h2>I'm the friends page!</h2> */}

          <div className="row">
            <div class="card col-4">
              <div class="card-body">
                
                  <CurrentFriends />
              </div>
            </div>

            <div class="col-1"></div>

            <div class="card col-7">
              <div class="card-body">
                  <FriendsResult />
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row">
            <div class="card col-4">
              <h2 className ="card-text">Make New Friends:</h2>
                <div class="card-body">
                  <FriendsSearch handleFormSubmit={this.handleFormSubmit} />
                  {/* <FriendsResult results={this.state.friendSearchResults} /> */}
                </div>
            </div>
          </div>
        
>>>>>>> 9ea044168dea22bc90f7ab2b945ebf6bcb7b26a3
        </Jumbotron>
      </div>
    );
  }
}

export default Friends;
