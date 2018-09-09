import React, { Component } from "react";
import API from "../../utils/API";

class RandomTrip extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    origin: "",
    departureDate: "",
    returnDate: "",
    duration: "",
    maxPrice: "",
    userID: window.id,
    searchResults: []
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
    alert(`Origin: ${this.state.origin}\nDeparture Date: ${this.state.departureDate}\nReturn Date: ${this.state.returnDate}\nTrip Duration: ${this.state.duration}\nMax Price: ${this.state.maxPrice}`);
    this.setState({ origin: "", departureDate: "", returnDate: "", duration: "", maxPrice: "" });
    
    API.randomFLight(this.state.searchResults)
    .then(res => this.setState({ searchResults: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
        <h2>Random Trip Generator:</h2>
      <form>
        <p>Origin Airport: <input
          type="text"
          placeholder="Airport Code"
          name="origin"
          value={this.state.origin}
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
        <p>Length of trip: <input
          type="number"
          placeholder="Number of Days"
          name="duration"
          value={this.state.duration}
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
     

        {/* <div>
          <ul>
            {this.state.searchResults.map((randomFlight, i) => (
                <TripResults key={i} text={randomFlight.searchResults} />
            ))}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default RandomTrip;