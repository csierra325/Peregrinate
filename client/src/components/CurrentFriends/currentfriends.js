import React, { Component } from "react";
import "./currentfriends.css";
import CurrentFriendItem from "../CurrentFriendItem";

class Currentfriends extends Component{
    state = {
        currentfriends: []
      };
    
 componentDidMount() {
        //PULL IN USER ID HERE TO POPULATE
    const id = "5b86cc97c6cc1b0a419a5de8";
    API.getUser(id)
      .then(res => this.setState({ currentfriends: res.data.currentfriends }))
      .catch(err => console.log(err));
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
          currentfriends: []
      });
  }

  render() {
      return(
          <div className="currentFriends">
              <div className = "currentFriendsTitle">Current Friends:</div>   
              <ul>
        {this.state.currentfriends.map(friend => (
          <CurrentFriendItem text={friend} />
        ))}
        </ul>            
          </div>

          

          
      )
  }
}

export default Currentfriends