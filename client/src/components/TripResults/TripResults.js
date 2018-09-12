import React from "react";

const TripResults = props => (
    <div align="left">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> 
                    <p>Destination:  {props.destination}</p>  
                    <p>Origin Airport:  {props.origin} </p> 
                    <p>Departure Date:  {props.departure_date}</p>
                    <p>Return Date:  {props.return_date}</p>
                    <p>Price:  {props.price}</p>
                    <p>Airline:  {props.airline}</p>
                </li>
            </ul>
    </div>
   
);

export default TripResults;