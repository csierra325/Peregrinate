import React, { Component } from "react";
import "./TripPlanner.css";

import TravelJumbotron from "../../components/TravelJumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
// import TravelTabs from "../../components/TravelTabs";
import NavTabs from "../../components/NavTabs";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Flight from "../../components/PlanATrip/Flight";
import Car from "../../components/PlanATrip/Car";
// import Hotel from "../../components/PlanATrip/Hotel";

class TripPlanner extends Component {
  state = {
    currentPage: "TripPlanner",
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
    return (
      <div>
        <div className="wrapper" align="left">
          <NavTabs />
          <TravelJumbotron>
            <div>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}>
                <ModalHeader toggle={this.toggle}>
                  Welcome to Your Trip Planner Page
                </ModalHeader>
                <ModalBody>
                  Planning a trip can be hard be we make it easy! You're
                  welcome.
                </ModalBody>
              </Modal>
            </div>

            <div className="tripGen row" align="center">
              <div class="globe col-12">
                <Globe />
              </div>
            </div>

            <br />
            <br />

              <TripGenerator />
          
            <br />
            <br />

              <div className="row">
                <div class="card col-5">
                  <div class="card-body">
                    <h2>Plan A Trip:</h2>
                    {/* <TravelTabs /> */}
                    <br/>
                    <Flight />
                    <br/>
                    <Car />
                    <br/>
                    <h4>Hotel:</h4>
                    <h5>Coming Soon!</h5>
                    {/* <Hotel /> */}
                  </div>
                </div>
              </div>
          </TravelJumbotron>
        </div>
      </div>
    );
  }
}

export default TripPlanner;
