import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
import TravelTabs from "../../components/TravelTabs";
import NavTabs from "../../components/NavTabs";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class TripPlanner extends Component {
  state = {
    currentPage: "TripPlanner",
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
          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Welcome to Your Trip Planner Page</ModalHeader>
              <ModalBody>
                 Planning a trip can be hard be we make it easy! You're welcome.
              </ModalBody>
            </Modal>
          </div>

          <div className="tripGen" align="left">
            <Globe />
            <TripGenerator />
          </div>
          <div>
            {/* <PlanATrip /> */}
            <TravelTabs />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default TripPlanner;
