import React from "react";

const LoginJumbotron = ({ children }) => (
  <div
    style={{ height: 350, clear: "both", textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default LoginJumbotron;
