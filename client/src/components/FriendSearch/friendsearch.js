import React, { Component } from "react";
import "./friendsearch.css";
import FriendSearchItem from "../FriendSearchItem/FriendSearchItem";
import API from "../../utils/API";
// import FriendsResult from "../FriendsResult/friendsresult";

class FriendsSearch extends Component {
    state = {
        friends: [],
        searchTerm: "",
        userID: window.id,
        id: window.id,
        searchResults: []
    }

    componentDidMount() {
        // this call is for friend request
        // API.getFriendSearch(window.id)
        // .then(res => this.setState({ friends: res.data.friendRequests }))
        // .catch(err => console.log(err));
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
        //API request to get user that matches name
        API.getUsers(this.state.searchTerm)
            .then(res => this.setState({ searchResults: res.data.dbModel }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="friendsSearch" align="left">
                <form class="form">
                    <h6>Search by Username: </h6>
                    <input
                        type="text"
                        placeholder="Username"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                    <ul>
                        {this.state.searchResults.map((friend, i) => (
                            <FriendSearchItem key={i} text={friend.username} />
                        ))}
                    </ul>
                </form>

            </div>
            // <div>
            //     <FriendsResult 
            //     name={username}/>
            // </div>
        )
    }
}

export default FriendsSearch

