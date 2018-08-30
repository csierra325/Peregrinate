import React from "react";
import Jumbotron from "../components/Jumbotron";
import Hexagon from "../components/Hexagon/Hexagon";




const Members = (props) => (
  <div className = "wrapper">
    <Jumbotron>
      <h1>Welcome to Peregrinate</h1>
      <h2>...Where The Adventure Awaits</h2>
      <Hexagon/>
    </Jumbotron>

   <footer style={{ textAlign: "center", padding: "20px", background: "grey"}}
   > <a href = {'/About'} color = "black" className= "aboutUs">About Us</a><a href = {"/Contact"} className= "contactUs">Contact Us</a></footer>
  </div>
);

export default Members;