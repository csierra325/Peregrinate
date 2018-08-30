import React, { Component } from "react";
import API from "../../utils/API";

class ProfileForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  // const id = window.username || 1;
  state = {
    firstname: "",
    lastname: "",
    email: "",
    airline: "",
    flyerNumber: "",
    car: "",
    rentalNumber: "",
    local: "",
    departureCity: "",
    addressOne: "",
    addressTwo: "",
    zip: "",
    userID: window.id
  };

  getUserProfile = (id) => {
    API.getProfile(id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

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

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      airline: "",
      flyerNumber: "",
      car: "",
      rentalNumber: "",
      local: "",
      addressOne: "",
      zip: "",
      departureCity: "",
    });

    // name, email,
    var name = {
      first: this.state.firstname,
      last: this.state.lastname
    }
    var { email } = this.state;

    var stateValue = document.getElementById("inputState").value;
    var airline = document.getElementById("flight").value;
    var carRental = document.getElementById("carRental").value;
    var local = document.getElementById("localCommute").value;


    var address = {
      addressOne: this.state.addressOne,
      adressTwo: this.state.addressTwo,
      city: this.state.city,
      state: stateValue,
      zip: this.state.zip,
    }

    var travelInfo = {
      frequentFlyer: this.state.flyerNumber,
      rentalNum: this.state.rentalNumber,
      departureCity: this.state.departureCity
    }
    // var {airline} = this.state;


    console.log(`
    First name: ${name.first}
    Last name: ${name.last}
    Email: ${email}
    Address_One: ${address.addressOne}
    Address_Two: ${address.adressTwo}
    City: ${address.city}
    State: ${address.state}
    Zip: ${address.zip}
    Airline: ${airline}
    Frequent Flyer Num: ${travelInfo.frequentFlyer}
    car: ${carRental}
    Rental Num: ${travelInfo.rentalNum}
    Departure City: ${travelInfo.departureCity}
    Local: ${local}
    `);

    this.getUserProfile(this.state.userID);

    console.log(`Window.id: ${window.id} \n this.state.userId: ${this.state.userID}`);

  };

  render() {
    // const id = window.id || 000;
    // console.log(id);
    return (
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="form-group col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="form-group col-md-4">
            <input
              class="form-control"
              type="email"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="form-group">
          <label class="text-left" for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="addressOne"
            value={this.state.addressOne}
            onChange={this.handleInputChange}
          />
        </div>

        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            name="addressTwo"
            value={this.state.addressTwo}
            onChange={this.handleInputChange}
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" name="city" value={this.state.city}
              onChange={this.handleInputChange} />
          </div>

          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" name="zip" value={this.state.zip}
              onChange={this.handleInputChange} />
          </div>
        </div>

        <div class="form-group">
          <label for="inputAddress2">Travel Info</label>
          <select
            class="form-control"
            type="text"
            placeholder="Airline"
            id="flight"
            name="airline"
            onChange={this.state.handleInputChange}
          >
            <option value="American Airlines">American Airlines</option>
            <option value="Delta Airlines">Delta Airlines</option>
            <option value="Frontier Airlines">Frontier Airlines</option>
            <option value="SouthWest Airlines">SouthWest Airlines</option>
            <option value="United Airlines">United Airlines</option>
          </select>

          <input
            class="form-control"
            type="text"
            placeholder="frequent flyer number"
            name="flyerNumber"
            value={this.state.flyerNumber}
            onChange={this.handleInputChange}
          />
        </div>

        <div class="form-group">
          <select
            class="form-control"
            type="text"
            placeholder="Car Rental"
            name="car"
            onChange={this.state.handleInputChange}
            id="carRental"
          >
            <option value="Alamo">Alamo</option>
            <option value="Avis">Avis</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Hertz">Hertz</option>
            <option value="National">National</option>
          </select>

          <input
            class="form-control"
            type="text"
            placeholder="rental number"
            name="rentalNumber"
            value={this.state.rentalNumber}
            onChange={this.handleInputChange}
          />

          <input
            class="form-control"
            type="text"
            placeholder="preferred departure city"
            name="departureCity"
            value={this.state.departureCity}
            onChange={this.handleInputChange}
          />

        </div>
        <div class="form-group">
          <select
            class="form-control"
            type="text"
            placeholder="Perferred Airline"
            name="local"
            onChange={this.state.handleInputChange}
            id="localCommute"
          >
            <option value="Bus">Bus</option>
            <option value="Lyft">Lyft</option>
            <option value="Taxi">Taxi</option>
            <option value="Train/Railway">Train/Railway</option>
            <option value="Uber">Uber</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleFormSubmit}
          >
            Update Profile
          </button>
        </div>
      </form>
    );
  }
}

export default ProfileForm;
