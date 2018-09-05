import React, { Component } from "react";
import "./currentfriends.css";
import API from "../../utils/API";
import CurrentFriendItem from "../CurrentFriendItem";

class Currentfriends extends Component{
    state = {
        currentFriends: [],
        userID: window.id,
        id: window.id
    };

    componentDidMount() {
        API.getCurrentFriends(window.id)
        .then(res => this.setState({ currentFriends: res.data.currentFriends }))
        .catch(err => console.log(err));
    };

  render() {
      return(
          <div className="currentFriends">
              <div className = "currentFriendsTitle">Current Friends:</div>   
              <ul>
                {this.state.currentFriends.map((currentFriends, i) => (
                <CurrentFriendItem key={i} text={currentFriends} />
                ))}
            </ul>            
          </div>
      )
  };
};

export default Currentfriends;