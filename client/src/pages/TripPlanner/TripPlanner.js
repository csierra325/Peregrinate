import React, { Component } from "react";

import Jumbotron from "../../components/Jumbotron";
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
        <h1>I'm the Trip Planner page!</h1> 
      </Jumbotron>
    </div>
        );
      }
    }

export default TripPlanner;
