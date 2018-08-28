import React from "react";

// deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

const ListItem = props => (
    <li>{props.text} <button>X</button></li>
);

export default ListItem;