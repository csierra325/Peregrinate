import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 1400, clear: "both", textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
