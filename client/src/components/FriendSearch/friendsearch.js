import React, { Component } from "react";
import "./friendsearch.css";
import FriendSearchItem from "../FriendSearchItem/FriendSearchItem";
import API from "../../utils/API";
// import FriendsResult from "../FriendsResult/friendsresult";

class FriendsSearch extends Component {
    state = {
        friends: [],
        username: "",
        userID: window.id
    }

    componentDidMount() {
        API.getFriendSearch(window.id)
        .then(res => this.setState({ friends: res.data.friendRequests }))
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
        // TODO: add API request to get user that matches name
        this.setState({
            // [name]: value
            // username: this.state.username,
            // userID: window.id
        });
    }

    render() {
        return (
            <div className="friendsSearch">
                <div className="currentFriendSearchTitle">Make New Friends:</div>

                <form className="form">
                    <p>Username: </p>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                    <ul>
                        {this.state.friends.map((friend, i) => (
                            <FriendSearchItem key={i} text={friend} />

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

