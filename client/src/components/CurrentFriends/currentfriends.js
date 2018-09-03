import React, { Component } from "react";
import "./currentfriends.css";
import API from "../../utils/API";
import CurrentFriendItem from "../CurrentFriendItem";

class Currentfriends extends Component{
    state = {
        currentfriends: []
      };
    
 componentDidMount() {
     const id= "5b8d75b4d171a90926092d3";
    API.getUser(id)
      .then(res => this.setState({ currentfriends: res.data.currentfriends }))
      .catch(err => console.log(err));
  };

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
  };
};

export default Currentfriends;