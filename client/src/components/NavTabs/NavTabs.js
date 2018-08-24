import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Members")}
        className={
          props.currentPage === "Members" ? "nav-link active" : "nav-link"
        }
      >
        Profile
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Maps")}
        className={
          props.currentPage === "Maps" ? "nav-link active" : "nav-link"
        }
      >
        My Map
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Wishlist")}
        className={
          props.currentPage === "Wishlist" ? "nav-link active" : "nav-link"
        }
      >
        Wishlist
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("TripPlanner")}
        className={
          props.currentPage === "TripPlanner" ? "nav-link active" : "nav-link"
        }
      >
        Trip Planner
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Friends")}
        className={
          props.currentPage === "Friends" ? "nav-link active" : "nav-link"
        }
      >
        Friends
      </a>
    </li>
  </ul>
);

export default NavTabs;
