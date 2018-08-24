import React, { Component } from "react";
import NavTabs from "../../components/NavTabs/NavTabs.js";
import Maps from "../Maps/WorldMap.js";

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
    } else {
      return <Wishlist />;
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
    );
  }
}

export default Profile;