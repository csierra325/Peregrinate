import React from "react";

const TravelJumbotron = ({ children }) => (
  <div
    style={{ height: 1500, clear: "both", textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default TravelJumbotron;
