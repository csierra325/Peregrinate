import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
import TravelTabs from "../../components/TravelTabs";

class TripPlanner extends Component {
  state = {
    currentPage: "TripPlanner"
  };

  render() {
    return (
    <div className = "wrapper">
      <Jumbotron>
        <div className="tripGen" align="left">
        <Globe />
        <TripGenerator />
        </div>
        <div>
          {/* <PlanATrip /> */}
        </div>
        <TravelTabs />
      </Jumbotron>     
    </div>
        );
      }
    }

export default TripPlanner;
