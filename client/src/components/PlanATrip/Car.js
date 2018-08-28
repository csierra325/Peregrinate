import React, { Component } from "react";

class Car extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    origin: "",
    destination: "",
    pickUp: "",
    dropOff: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Origin: ${this.state.origin}\nDestination: ${this.state.destination}\nPickup Date: ${this.state.pickUp}\nDrop Off Date: ${this.state.dropOff}`);
    this.setState({ origin: "", destination: "", pickUp: "", dropOff: ""});
  };

  render() {
    return (
        <div className = "flight">
      <form>
        <p>Origin Airport: <input
          type="text"
          placeholder="Airport Code"
          name="origin"
          value={this.state.origin}
          onChange={this.handleInputChange}
        /></p>
        <p>Destination: <input
          type="text"
          placeholder="Where you headed?"
          name="destination"
          value={this.state.destination}
          onChange={this.handleInputChange}
        /></p>
        <p>Pick up Date: <input
          type="date"
          placeholder="YYYYYYY-MM-DD"
          name="pickUp"
          value={this.state.pickUp}
          onChange={this.handleInputChange}
        /></p>
         <p>Return Date: <input
          type="date"
          placeholder="YYYYYYY-MM-DD"
          name="dropOff"
          value={this.state.dropOff}
          onChange={this.handleInputChange}
        /></p>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Car;