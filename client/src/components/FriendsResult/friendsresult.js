import React, { Component } from "react";
// import FriendSearchItem from "../FriendSearchItem/FriendSearchItem";
import API from "../../utils/API";


class FriendsResult extends Component {
    state = {
        currentfriends: [],
        friends: [],
        userID: window.id,
        id: window.id
    }

    componentDidMount() {
        API.getCurrentFriends(window.id)
        .then(res => this.setState({ currentFriends: res.data.currentFriends,
            friends: res.data.friendRequests }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="friendsResult" align="left">
                <h2 className="card-text">Friend Results:</h2>
                <ul class="list-group list-group-flush">
                    FRIEND LIST
                    {/* {this.state.friends.map((friend, i) => (
                        <FriendSearchItem key={i} text={friend} />

                    ))} */}
                </ul>
            </div>

        )
    }
}

// const FriendsResult = props => (
// //     <div className="friendsResult" align="left">
//         <h2 className="card-text">Friend Results:</h2>
//             <ul class="list-group list-group-flush">
//             <li class="list-group-item"> FRIEND NAME </li>
//             </ul>

// //     </div>

// );

export default FriendsResult;