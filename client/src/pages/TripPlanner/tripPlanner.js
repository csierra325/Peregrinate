import React, { Component } from "react";
// import NavTabs from "../../components/NavTabs/NavTabs.js";
import Jumbotron from "../../components/Jumbotron";

class TripPlanner extends Component {
  state = {
    currentPage: "TripPlanner"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount (){

  }

  render() {
    return (
    <div className = "wrapper">
      <Jumbotron>
        <h1>I'm the Trip Planner page!</h1> 
      </Jumbotron>
    </div>
        );
      }
    }

export default TripPlanner;