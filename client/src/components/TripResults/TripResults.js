import React from "react";

const TripResults = props => (
    <div align="left">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Destination:  {props.destination} </li>
                <li class="list-group-item"> Origin Airport:  {props.origin} </li>
                <li class="list-group-item"> Departure Date:  {props.departure_date} </li>
                <li class="list-group-item"> Return Date:  {props.return_date} </li>
                <li class="list-group-item"> Price:  {props.price} </li>
                <li class="list-group-item"> Airline:  {props.airline} </li>
            </ul>
    </div>
   
);

export default TripResults;