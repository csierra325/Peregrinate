import React, { Component } from "react";
import "./currentfriends.css";
import API from "../../utils/API";
import CurrentFriendItem from "../CurrentFriendItem";

class Currentfriends extends Component{
    state = {
        currentPage: "Friends",
        userId: window.username,
        currentFriends: []
      };
    
//  componentDidMount() {
//     API.getUser(id)
//       .then(res => this.setState({ currentFriends: res.data.currentFriends }))
//       .catch(err => console.log(err));
//   };

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