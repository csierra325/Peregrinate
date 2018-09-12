//EXAMPLE LOW FAIR API SEARCH URL. You can formulate a low-fare search from your inspiration search like this:
// http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin=<origin>&destination=<destination>&departure_date=<departure_date>&return_by=<return_date>T23:59&apikey=<your API key>

//Alternatively, you might want to present a graph of prices to go to that destination on a given date range, in which case you could do an extensive search like this:
// http://api.sandbox.amadeus.com/v1.2/flights/extensive-search?origin=<origin>&departure_date=<date_range_start--date_range_end>&duration=<min_duration--max_duration>&apikey=<your API key>



import React, { Component } from "react";
import TripResults from "../TripResults/TripResults";

class RandomTrip extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    userID: window.id,
    id: window.id,
    randomResults: []
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

    const BASEURL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?";
    const APIKEY = "&apikey=v6GXrGrT04AWCblHYYiKXAznKmyABeKV";
    
    fetch(BASEURL + `origin=${this.state.origin}&departure_date=${this.state.departureDate}&max_price=${this.state.maxPrice}&limit=500` + APIKEY)
      .then(res => {
        return res.json()
      })
        // .then(results => console.log('Success:', JSON.stringify(results)))
        .then(results => {
            let json = JSON.parse(JSON.stringify({
              origin: results.origin,
              results: results.results,
              // destination: results.results.destination,
              // departure_date: results.results.departure_date,
              // return_date: results.results.return_date,
              // price: results.results.price,
              // airline: results.results.airline
            }));
            this.setState({randomResults: this.state.randomResults.concat(json)})
            console.log(this.state.randomResults);
  });
}

  render() {
    return (
        <div className="row">
        <div className="card col-5">
          <div className="card-body">
            <div>
              <h2>Random Trip Generator:</h2>

                <form align="left">

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

                  <p>Max Price: <input
                    type="number"
                    placeholder="$"
                    name="maxPrice"
                    value={this.state.maxPrice}
                    onChange={this.handleInputChange}
                  /></p>

                  <button className="col-12" onClick={this.handleFormSubmit}>Submit</button>

                </form>
            </div>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="card tripResults col-6">
            <div className="card-body">
              <h2 className="card-text">Trip Results:</h2>
                <ul>
                  {this.state.randomResults.map((randomResults, i) => (
                    <TripResults key={i} 
                    origin={randomResults.origin} 
                    destination= {randomResults.results[i].destination}
                    departure_date= {randomResults.results[i].departure_date}
                    return_date= {randomResults.results[i].return_date}
                    price= {randomResults.results[i].price}
                    airline= {randomResults.results[i].airline}
                    />
                  ))}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default RandomTrip;