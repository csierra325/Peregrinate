import React, { Component } from "react";
import NavTabs from "../../components/NavTabs/NavTabs.js";
import Maps from "../Maps/WorldMap.js";

import Members from "../Members.js";
import Wishlist from "../Wishlist";

class Profile extends Component {
  state = {
    currentPage: "ProfileTabPage"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Members") {
      return <Members />;
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