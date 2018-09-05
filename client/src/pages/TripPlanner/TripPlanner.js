import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
import TravelTabs from "../../components/TravelTabs";
import NavTabs from "../../components/NavTabs";
import TripResults from "../../components/TripResults/TripResults";

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
        
        <div className="tripGen" align="left">
          <Globe />
          <br/>

          <div className="row">
            <div class="card col-5">
              <div class="card-body">
                <TripGenerator />
              </div>
            </div>

            <div class="col-1"></div>

            <div class="card col-6">
              <div class="card-body">
                <TripResults />
              </div>  
            </div> 
          </div>

          <br/><br/>

          <div className="row">
            <div class="card col-5">
              <div class="card-body">
                <h2>Plan A Trip:</h2>
                <TravelTabs />
                {/* <PlanATrip /> */}
              </div>
            </div>
          </div>

        </div> 
      </Jumbotron>     
    </div>
        );
      }
    }

export default TripPlanner;
