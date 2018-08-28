import React, { Component } from "react";

class FriendsSearch extends Component {
    state = {
        username: ""
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
        })
    }

    render() {
        return (
            <div className="friendsSearch">
                <h2>Make New Friends:</h2>
                <form>
                    <p>Username: <input
                        type="text"
                        placeholder="Username"
                        name="origin"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    /></p>
                </form>
            </div>
        )
    }
}

export default FriendsSearch

