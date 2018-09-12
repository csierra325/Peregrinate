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

//     constructor(props) {
//         super(props);
//         this.addButton = this.addButton.bind(this);
//         this.state = {
//             searchResults: ""
//           };
//       }
       
//     addButton = event => {
//         event.preventDefault();

//         API.updateUser(window.id)
//         .then(res => {
//           console.log(res);
//           const results = res.data.dbModel;
//           this.setState({
//             searchResults: results.username
//            });
//         })
//         .catch(err => console.log(err));
//     }

//     render() {
//         // const results = this.state.searchResults;
//         return (
//             <div className="friendsSearch" align="left">
//                 <div>
//                     <li>{this.props.text} 
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