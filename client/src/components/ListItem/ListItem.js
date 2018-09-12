import React from "react";
import API from "../../utils/API";


    
 const ListItem = props => (
     
    <li>{props.text} <button onClick = {props.onDelete} >x</button></li>
);



export default ListItem;