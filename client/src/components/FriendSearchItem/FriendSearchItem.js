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
//         id: window.id,
//         searchResults: [],
//         currentFriends:[]
//     };
    
//     addButton = event => {
//         event.preventDefault();

//         API.updateUser(window.id)
//         .then(res => this.setState({ currentFriends: res.data.currentFriends }))
//         .catch(err => console.log(err));
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             searchResults: "friend.username"
//           };
//         this.addButton = this.addButton.bind(this);
//       }

//     render() {
//         return (
//             <div className="friendsSearch" align="left">
//                 <div>
//                     <li>{this.searchResults} 
//                         <button
//                         onClick={this.addButton}
//                         >ADD</button>
//                     </li>
//                 </div>
//             </div>
//             // <div>
//             //     <FriendsResult 
//             //     name={username}/>
//             // </div>
//         )
//     }
    
// };

// export default FriendSearchItem;