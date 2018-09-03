import React, { Component } from "react";
import "./friendsearch.css";

class FriendsSearch extends Component {
    state = {
        username: "",
        userID: window.id
    }

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
            username: ""
        });
    }

    render() {
        return (
            <div className="friendsSearch">
                <div className = "currentFriendSearchTitle">Make New Friends:</div>
                
                <form class="form">
                    <p>Username: </p>
                    <input
                        type="text"
                        placeholder="Username"
                        name="origin"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.props.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default FriendsSearch

