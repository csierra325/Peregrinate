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
    userID: window.id
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
      local: ""
    });

    console.log(`First name: ${this.state.firstname}\nLast name: ${this.state.lastname} \nEmal: ${this.state.email}`);
    console.log(`airline: ${this.state.airline}\nflyerNumber: ${this.state.flyerNumber} \ncar: ${this.state.car}`)
    console.log(`rentalNumber: ${this.state.rentalNumber}\nlocal: ${this.state.local}`)

    // API.getUser(users_name)
    //   .then(res => {
    //     // console.log(`returned user from database: ${res.data[0].username}`);
    //     // console.log(`this.state.existing_username: ${users_name}`);
    //     // window.id = res.data[0]._id;
    //     // databaseUsername = res.data[0].username;
    //     // databasePassword = res.data[0].password;
    //     // usernameEntered = users_name;
    //     // passwordEntered = users_password;
    //   })
    // .catch(err => console.log(err));

    console.log(`Window.id: ${window.id} \n this.userId: ${this.state.userID}`);
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
          />
        </div>

        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
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
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>

        <div class="form-group">
          <label for="inputAddress2">Travel Info</label>
          <select
            class="form-control"
            type="text"
            placeholder="Airline"
            id="exampleFormControlSelect1"
            name="airline"
            onChange={this.state.handleInputChange}
          >
            <option value={this.state.airline}>American Airlines</option>
            <option value={this.state.airline}>Delta Airlines</option>
            <option value={this.state.airline}>Frontier Airlines</option>
            <option value={this.state.airline}>SouthWest Airlines</option>
            <option value={this.state.airline}>United Airlines</option>
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
          >
            <option value={this.state.car}>Alamo</option>
            <option value={this.state.car}>Avis</option>
            <option value={this.state.car}>Enterprise</option>
            <option value={this.state.car}>Hertz</option>
            <option value={this.state.car}>National</option>
          </select>

          <input
            class="form-control"
            type="text"
            placeholder="rental number"
            name="rentalNumber"
            value={this.state.rentalNumber}
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
          >
            <option value={this.state.local}>Bus</option>
            <option value={this.state.local}>Lyft</option>
            <option value={this.state.local}>Taxi</option>
            <option value={this.state.local}>Train/Railway</option>
            <option value={this.state.local}>Uber</option>
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
