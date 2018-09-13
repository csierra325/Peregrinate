import React from "react";

const WishListJumbotron = ({ children }) => (
  <div
    style={{ height: 800, clear: "both", textAlign: "center" }}
    className="wishlistjumbotron"
  >
    {children}
  </div>
);

export default WishListJumbotron;
