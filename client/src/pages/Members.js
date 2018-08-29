import React from "react";
import Jumbotron from "../components/Jumbotron";
// import Slideshow from "../components/Slideshow/Slideshow"
import Hexagon from "../components/Hexagon/Hexagon";

const Members = (props) => (
  <div className = "wrapper">
    <Jumbotron>
      <h1>Welcome to Pereginate</h1>
      <h2>...Where The Adventure Awaits</h2>
      <Hexagon/>
  
    {/* <p className = "intro">Who are we? We are the company that gives you everything you need when it comes to planning your new adventure. 
      Our application gives you the organization you always wanted all in one stop. You are able to see where your friends have been,
      keep track of your favorite places you want to travel, and if you are feeling spontaneous have us pick out a trip for you! All you need to 
      to is sign up! 
    </p>  */}

    </Jumbotron>


  </div>
);

export default Members;