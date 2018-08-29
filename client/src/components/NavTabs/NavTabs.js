import React from "react";
import { Link } from "react-router-dom";
// import { PromiseProvider } from "mongoose";

const NavTabs = props => {
  // const id = this.props.match.params.id;
  const id = window.username || 1;
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to={`/profile/${id}`}
          className={
            window.location.pathname === `/profile/${id}` ? "nav-link active" : "nav-link"
          }
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/map/${id}`}
          className={
            window.location.pathname === `/map/${id}` ? "nav-link active" : "nav-link"
          }
        >
          Map
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/wishlist/${id}`}
          className={
            window.location.pathname === `/wishlist/${id}` ? "nav-link active" : "nav-link"
          }
        >
          Wishlist
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/tripplanner/${id}`}
          className={
            window.location.pathname === `/tripplanner/${id}` ? "nav-link active" : "nav-link"
          }
        >
          Trip Planner
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={`/friends/${id}`}
          className={
            window.location.pathname === `/friends/${id}` ? "nav-link active" : "nav-link"
          }
        >
          Friends
        </Link>
      </li>
    </ul>
  );
};

export default NavTabs;
