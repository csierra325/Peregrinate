import React, { Component } from "react";
import "./currentfriends.css";

class Currentfriends extends Component{
    state = {
        currentfriends: [],
        userID: window.id,
        id: window.id
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
  };

  render() {
      return(
          <div className="currentFriends" align="left">
            <h2 className = "card-text">Current Friends:</h2> 
                <ul class="list-group list-group-flush">    
                    <li class="list-group-item"> CURRENT FRIEND </li>
                </ul>
          </div> 
      )
  }
};

export default Currentfriends;