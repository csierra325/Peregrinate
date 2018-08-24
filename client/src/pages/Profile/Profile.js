import React, { Component } from "react";
import NavTabs from "../../components/NavTabs/NavTabs.js";
// import Jumbotron from "../../components/Jumbotron";

//Importing pages for navigation
import Maps from "../Maps/WorldMap.js";
import Friends from '../Friends';
import TripPlanner from '../TripPlanner';
import Members from "../Members.js";
import Wishlist from "../Wishlist";
import Login from '../Login';

console.log(`Logins: ${Login}`)
class Profile extends Component {
  state = {
    currentPage: "ProfileTabPage",
    username: this.props.match.params.id
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  componentDidMount (){

  }

  // username={this.props.match.params.id}
  renderPage = () => {
    if (this.state.currentPage === "Members") {
      return <Members username={this.state.username}/>;
    } else if (this.state.currentPage === "Maps") {
      return <Maps />;
    } else if (this.state.currentPage === "TripPlanner") {
      return <TripPlanner />;
    }else if (this.state.currentPage === "Wishlist") {
      return <Wishlist />;
    }else if (this.state.currentPage === "Friends") {
      return <Friends />;
    } 
  };


  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>

    //   <div className = "wrapper">
    //   <Jumbotron>
    //   <h1>I'm the profile page!</h1> 
    //   </Jumbotron>
    //   </div>
    )
  }
};

export default Profile;