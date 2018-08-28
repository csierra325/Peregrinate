import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
import TravelTabs from "../../components/TravelTabs";
import NavTabs from "../../components/NavTabs"

class TripPlanner extends Component {
  state = {
    currentPage: "TripPlanner"
  };

  render() {
    return (
    <div className = "wrapper">
      <NavTabs />
      <Jumbotron>
        <div className="tripGen" align="left">
        <Globe />
        <TripGenerator />
        </div>
        <div>
          <TravelTabs />
          {/* <PlanATrip /> */}
        </div>       
      </Jumbotron>     
    </div>
        );
      }
    }

export default TripPlanner;
