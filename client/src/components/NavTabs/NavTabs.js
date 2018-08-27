import React from "react";
import { Link } from "react-router-dom";



const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/profile"
        className={
          window.location.pathname === "/profile" ? "nav-link active" : "nav-link"
        }
      >
        Profile
      </Link>
    </li>
    <li className="nav-item">
    <Link
        to="/map"
        className={
          window.location.pathname === "/map" ? "nav-link active" : "nav-link"
        }
      >
       Map
      </Link>
    </li>
    <li className="nav-item">
    <Link
        to="/wishlist"
        className={
          window.location.pathname === "/wishlist" ? "nav-link active" : "nav-link"
        }
      >
        Wishlist
      </Link>
    </li>
    <li className="nav-item">
    <Link
        to="/tripplanner"
        className={
          window.location.pathname === "/tripplanner" ? "nav-link active" : "nav-link"
        }
      >
        Trip Planner
      </Link>
    </li>
    <li className="nav-item">
    <Link
        to="/friends"
        className={
          window.location.pathname === "/friends" ? "nav-link active" : "nav-link"
        }
      >
        Friends
      </Link>
    </li>
  </ul>
);

export default NavTabs;
