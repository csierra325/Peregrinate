import React from "react";
import Jumbotron from "../components/Jumbotron"

const Contact = (props) => (
    <div className = "wrapper">
      <Jumbotron>
        <h1>We Wanna Hear From You!</h1>
        <div className = "intro">We are open to suggestions, changes or even knew ideas to make our application fit your every needs! Feel free
            to contact us! We are based on Eastern Daylight Time.
        </div>
        <div className = "intro">Phone Number: 1-800-EXPLORE  </div>
        <div className = "intro">Email: Peregrinate@travel.com </div>
      
    
      </Jumbotron>
  
     <footer style={{ textAlign: "center", padding: "20px", background: "grey"}}
     > </footer>
    </div>
  );
  
  export default Contact;