import React from "react";
import Jumbotron from "../components/Jumbotron";
import NavTabs from "../components/NavTabs/NavTabs";


const Contact = (props) => (
    <div className="wrapper">
        <Jumbotron>
            <h1>We Wanna Hear From You!</h1>
            <img src="http://3.bp.blogspot.com/-wUdCv5dvGvs/VVPBKkwsj6I/AAAAAAAAAmE/_-Q9aKDx4fM/s1600/fish-and-scuba-diver-funny-priceless-expression.jpg" alt="Fish" height="42" width="42" />
            <div className="intro">We are open to suggestions, changes or even knew ideas to make our application fit your every needs! Feel free
                to contact us! We are based on Eastern Daylight Time.
        </div>
            <div className="intro">Phone Number: 1-800-EXPLORE  </div>
            <div className="intro">Email: Peregrinate@travel.com </div>


        </Jumbotron>

        <footer style={{ textAlign: "center", padding: "20px", background: "#5c5c5c", color: "white", fontWeight: "bold" }}
        > <a href = {'/About'} color = "white" className= "aboutUs">About Us</a><a href = {"/Contact"} className= "contactUs">Contact Us</a></footer>
    </div>
);

export default Contact;