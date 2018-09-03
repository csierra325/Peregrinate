import React, { Component } from "react";
import "./friendsearch.css";
import FriendsResult from "../FriendsResult/friendsresult";

class FriendsSearch extends Component {
    state = {
        username: ""
    };

//     componentDidMount() {
//         //PULL IN USER ID HERE TO POPULATE
//     const id = "5b86cc97c6cc1b0a419a5de8";
//     API.getUsers(username)
//       .then(res => this.setState({ username: res.data.username }))
//       .catch(err => console.log(err));
//   };

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
            // <div>
            //     <FriendsResult 
            //     name={username}/>
            // </div>
        )
    }
}

export default FriendsSearch

