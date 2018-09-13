import React from "react";
    
 const ListItem = props => (
     
    <li>{props.text} <button onClick = {props.onDelete} >x</button></li>
);

export default ListItem;