
import React, { Component } from "react";import NavTabs from "../../components/NavTabs";

import Gallery from "../../components/Gallery/Gallery";
import "../../components/Gallery/Gallery.css"



        
class Travelideas extends Component {
    state = {
      currentPage: "Profile",
      username: window.username
    };
  
    
  
    render() {
      return (
        <div className="wrapper">
          <NavTabs />
          <div className= "bucketlistIdeas">Bucket List Ideas</div>
        <Gallery/>
        
        </div>
      );
    }
  }
  
  export default Travelideas;