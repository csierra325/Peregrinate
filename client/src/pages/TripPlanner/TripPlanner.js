import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
import TripGenerator from "../../components/TripGenerator";
import Globe from "../../components/Globe";
import TravelTabs from "../../components/TravelTabs";
import NavTabs from "../../components/NavTabs";

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
            <div class="card col-s-6">
              <div class="card-body">
                <TripGenerator />
              </div>
            </div>

            <div class="card col-s-6">
              <div class="card-body">
                <p>Results List:</p>
              </div>  
            </div> 
          </div>

          <div className="row">
            <div class="card col-s-6">
              <div class="card-body">
                <p>Plan A Trip</p>
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
