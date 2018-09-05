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