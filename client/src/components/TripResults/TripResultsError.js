import React from "react";

const TripResultsError = props => (
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
                <div align="left">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> 
                        <p>Sorry! There doesn't seem to be any trips available for those parameters. Please try again!</p>  
                    </li>
                </ul>
                </div>
            </ul>
        </div>
    </div>
  </div>










   
);

export default TripResultsError;