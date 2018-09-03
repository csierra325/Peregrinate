import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
import TravelTabs from "../../components/TravelTabs";
import NavTabs from "../../components/NavTabs";
import TripInstructions from "../../components/TripInstructions"

class TripPlanner extends Component {
  state = {
    currentPage: "TripPlanner",
    username: window.username
  };

  render() {
    return (
    <div className = "wrapper">
      <NavTabs />
      <Jumbotron>
        <TripInstructions />
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
