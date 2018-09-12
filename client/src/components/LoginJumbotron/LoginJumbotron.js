import React from "react";

const LoginJumbotron = ({ children }) => (
  <div
    style={{ height: 325, clear: "both", textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default LoginJumbotron;
