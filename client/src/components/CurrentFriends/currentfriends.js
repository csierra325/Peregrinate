import React, { Component } from "react";
import "./currentfriends.css";

class Currentfriends extends Component{
    state = {
        currentfriends: ""
      };
    
    // handle any changes to the input fields
    handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
      event.preventDefault();
      this.setState({
          currentfriends: ""
      });
  }

  render() {
      return(
          <div className="currentFriends">
              <div className = "currentFriendsTitle">Current Friends:</div>               
          </div>

          

          
      )
  }
}

export default Currentfriends