import React from "react";
import Jumbotron from "../components/Jumbotron";
import Slideshow from "../components/Slideshow/Slideshow";
import NavTabs from "../components/NavTabs/NavTabs";

const About = (props) => (
    <div className = "wrapper">
    <NavTabs />
      <Jumbotron>
        <Slideshow/>
        <h1>Who Are We?</h1>
    
      <p className = "intro"> We are the company that gives you everything you need when it comes to planning your new adventure. 
        Our application gives you the organization you always wanted all in one stop. You are able to see where your friends have been,
        keep track of your favorite places you want to travel, and if you are feeling spontaneous have us pick out a trip for you! All you need to 
        to is sign up! 
      </p>  
      
      <h2>Who are the developers?</h2>

      <div className = "intro">We are based in are based in Atlanta, GA. We all have a passion for traveling, but we are also planners. We wanted to have an easier way to put all of our ideas
        in one spot. So we decided to create it. All of the developers met and worked together at Georgia Tech's Coding Bootcamp.
         We are all open to incorporating any ideas you want to see come to life! This application is continuously growing to suit your needs.
      </div>
  
      </Jumbotron>
  
     <footer style={{ textAlign: "center", padding: "20px", background: "grey"}}
     > </footer>
    </div>
  );
  
  export default About;