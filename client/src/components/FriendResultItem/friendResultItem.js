import React from "react";

// deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

const FriendResultItem = props => (
    <li>{props.text} <button>ADD</button></li>
);

export default FriendResultItem;