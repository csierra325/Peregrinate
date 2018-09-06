import React, { Component } from "react";

class Flight extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    origin: "",
    destination: "",
    departureDate: "",
    duration: "",
    maxPrice: "",
    userID: window.id
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
    alert(`Origin: ${this.state.origin}\nDestination: ${this.state.destination}\nDeparture Date: ${this.state.departureDate}\nReturn Date: ${this.state.returnDate}\nMax Price: ${this.state.maxPrice}`);
    this.setState({ origin: "", destination: "", departureDate: "", returnDate: "", maxPrice: "" });
  };

  render() {
    return (
        <div className = "flight" align="left">
        <h4>Flight:</h4>
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
        <p>Departure Date: <input
          type="date"
          placeholder="YYYYYYY-MM-DD"
          name="departureDate"
          value={this.state.departureDate}
          onChange={this.handleInputChange}
        /></p>
         <p>Return Date: <input
          type="date"
          placeholder="YYYYYYY-MM-DD"
          name="returnDate"
          value={this.state.returnDate}
          onChange={this.handleInputChange}
        /></p>
        <p>Max Price: <input
          type="number"
          placeholder="$"
          name="maxPrice"
          value={this.state.maxPrice}
          onChange={this.handleInputChange}
        /></p>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Flight;