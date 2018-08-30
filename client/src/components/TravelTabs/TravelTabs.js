import React from "react";
import { Link } from "react-router-dom";

const TravelTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="TripPlanner/Flight"
        className={
          window.location.pathname === "TripPlanner/Flight" ? "nav-link active" : "nav-link"
        }
      >
        Flight
      </Link>
    </li>
    <li className="nav-item">
    <Link
        to="TripPlanner/Car"
        className={
          window.location.pathname === "TripPlanner/Car" ? "nav-link active" : "nav-link"
        }
      >
       Car
      </Link>
    </li>
    <li className="nav-item">
    <Link
        to="TripPlanner/Hotel"
        className={
          window.location.pathname === "TripPlanner/Hotel" ? "nav-link active" : "nav-link"
        }
      >
        Hotel
      </Link>
    </li>
  </ul>
);

export default TravelTabs;
