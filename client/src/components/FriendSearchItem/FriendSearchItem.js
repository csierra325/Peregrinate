import React from "react";

const FriendSearchItem = props => (
    <li>{props.text} <button>ADD</button></li>
);

export default FriendSearchItem;

// import React, { Component } from "react";
// import API from "../../utils/API";

// class FriendSearchItem extends Component {
//     state = {
//         userID: window.id,
//         id: window.id
//     };

//     matchedSearch = props => { 
//         debugger;
//          (
//             <div>
//                 <li>{props.text} 
//                     <button
//                     onClick={this.handleFormSubmit}
//                     >ADD</button>
//                 </li>
//             </div>
//         );    
//     };

//     handleFormSubmit = event => {
//         debugger;
//         event.preventDefault();
//         //API request to get user that matches name
//         API.updateUser(window.id)
//             .then(res => this.setState({ currentFriends: res.data.currentFriends }))
//             .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             <div className="friendsSearch" align="left">
//                {this.matchedSearch}
//             </div>
//             // <div>
//             //     <FriendsResult 
//             //     name={username}/>
//             // </div>
//         )
//     }
    
// };

// export default FriendSearchItem;