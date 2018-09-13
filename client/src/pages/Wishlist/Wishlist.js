import React, { Component } from "react";
import NavTabs from "../../components/NavTabs"
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Bucketlist from "../../components/Bucketlist/Bucketlist";
import Traveledlist from "../../components/Traveledlist/Traveledlist";
import Friendlist from "../../components/Friendlist/Friendlist";
import WishListJumbotron from "../../components/WishListJumbotron";

class Wishlist extends Component {
  state = {
    currentPage: "WishList",
    userID: window.id,
    id: window.id,
    modal: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    window.id = this.state.id;

    return (
      <div>        
        <NavTabs />
        <WishListJumbotron>
        <div>
          <Bucketlist />
        </div>

        <div>
          <Traveledlist />
        </div>

        <div>
          <Friendlist />
        </div>
        </WishListJumbotron>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Welcome to Your Wish List Page</ModalHeader>
          <ModalBody>
            Want to go somewhere but don't know when you can go. Add it to your wish list and come back later!
          </ModalBody>
        </Modal>
      
      </div>
    );
  }
}

export default Wishlist;