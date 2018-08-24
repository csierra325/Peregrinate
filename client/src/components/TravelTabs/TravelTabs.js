import React from "react";

const TravelTabs = props => (
  <ul className="nav travel-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Members")}
        className={
          props.currentPage === "Members" ? "nav-link active" : "nav-link"
        }
      >
        Flight
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Maps")}
        className={
          props.currentPage === "Maps" ? "nav-link active" : "nav-link"
        }
      >
        Hotel
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Wishlist")}
        className={
          props.currentPage === "Wishlist" ? "nav-link active" : "nav-link"
        }
      >
        Car
      </a>
    </li>
  </ul>
);

export default TravelTabs;
