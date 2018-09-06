import React from "react";

import Hexagon from "../components/Hexagon/Hexagon";

const Members = (props) => (
  <div className = "wrapper">
  <div className ="backgroundHexagon">

      <h1 className="membersFont">Welcome to Peregrinate</h1>
      <div className = "memberH2">“travel or wander around from place to place”</div>
      <Hexagon/>
  
    </div>
   <footer style={{ textAlign: "center", padding: "20px", background: "#5c5c5c"}}
   > <a href = {'/About'} color = "white" className= "aboutUs">About Us</a><a href = {"/Contact"} className= "contactUs">Contact Us</a></footer>
  </div>
);

export default Members;