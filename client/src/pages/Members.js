import React from "react";
import Jumbotron from "../components/Jumbotron";

const Members = (props) => (
  <div className = "wrapper">
    <Jumbotron>
    <h1>I'm the members page</h1> 
    <p>Hello {props.username}!</p>
    </Jumbotron>
  </div>
);

export default Members;