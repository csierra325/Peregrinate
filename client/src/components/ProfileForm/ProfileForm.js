import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProfileForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  constructor(props) {
    super(props);
    this.state = {
      stateSelected: false,
      profileUpdated: false
    };

    this.closeModal = this.closeModal.bind(this);

  };

  closeModal() {
    this.setState({
      stateSelected: false,
      profileUpdated: false
    });
  };

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
    city: "",
    zip: "",
    userID: window.id,
    username: window.username,
    id: window.id
  };

  componentDidMount() {
    API.getUser(window.id)
      .then(res => {
        const dbUser = res.data;
        this.setState({
          firstname: dbUser.name.first,
          lastname: dbUser.name.last,
          email: dbUser.email,
          airline: dbUser.travelInfo.airline,
          flyerNumber: dbUser.travelInfo.frequentFlyerNumber,
          rentalNumber: dbUser.travelInfo.rentalNumber,
          local: dbUser.travelInfo.local,
          departureCity: dbUser.travelInfo.departureCity,
          addressOne: dbUser.address.addressOne,
          addressTwo: dbUser.address.addressTwo,
          city: dbUser.address.city,
          zip: dbUser.address.zip
        });
        if (dbUser.travelInfo.rental){
          document.getElementById('carRental').value = dbUser.travelInfo.rental;
        }
        document.getElementById('inputState').value = dbUser.address.state;
        
        document.getElementById('localCommute').value = dbUser.travelInfo.local;

      }).catch(err => console.log(err));
  }

  autoPopulateProfile() {
    API.getUser(window.id)
      .then(res => {
        const dbUser = res.data;
        this.setState({
          firstname: dbUser.name.first,
          lastname: dbUser.name.last,
          email: dbUser.email,
          airline: dbUser.travelInfo.airline,
          flyerNumber: dbUser.travelInfo.frequentFlyerNumber,
          rentalNumber: dbUser.travelInfo.rentalNumber,
          local: dbUser.travelInfo.local,
          departureCity: dbUser.travelInfo.departureCity,
          addressOne: dbUser.address.addressOne,
          addressTwo: dbUser.address.addressTwo,
          zip: dbUser.address.zip,
          city: dbUser.address.city
        });
        document.getElementById('inputState').value = dbUser.address.state;
        document.getElementById('carRental').value = dbUser.travelInfo.rental;
        document.getElementById('localCommute').value = dbUser.travelInfo.local;
      }).catch(err => console.log(err));
  }

  profileUpdateConfirmation() {
    this.setState({ profileUpdated: true });
  }

  updateUser = (id, updating) => {

    API.updateUser(id, updating)
      .then(res => {
        console.log(res.data);
        this.autoPopulateProfile();
        this.profileUpdateConfirmation();
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
  handleFormSubmit = e => {
    e.preventDefault();

    var userSelectedState = document.getElementById('inputState').value;
    console.log(`State: ${userSelectedState}`);

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
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      state: stateValue,
      zip: this.state.zip,
    }

    var travelInfo = {
      frequentFlyer: this.state.flyerNumber,
      rentalNum: this.state.rentalNumber,
      departureCity: this.state.departureCity
    }

    console.log(`
      First name: ${name.first}
      Last name: ${name.last}
      Email: ${email}
      Address_One: ${address.addressOne}
      Address_Two: ${address.addressTwo}
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

    if (address.city === undefined || address.state === "Choose...") {
      this.setState({ stateSelected: true });
    } else {
      this.updateUser(window.id, {
        $set: {
          "name.first": name.first,
          "name.last": name.last,
          email: email,
          "address.addressOne": address.addressOne,
          "address.addressTwo": address.addressTwo,
          "address.city": address.city,
          "address.state": address.state,
          "address.zip": address.zip,
          "travelInfo.airline": airline,
          "travelInfo.frequentFlyerNumber": travelInfo.frequentFlyer,
          "travelInfo.rental": carRental,
          "travelInfo.rentalNumber": travelInfo.rentalNum,
          "travelInfo.departureCity": travelInfo.departureCity,
          "travelInfo.local": local
        }
      });

      // this.state.firstname = name.first;
      // document.getElementById('firstName').value = name.first;
    }
  };

  render() {
    return (
      <div>
        {this.state.stateSelected ? <Modal isOpen={this.state.stateSelected} toggle={this.closeModal} className={this.props.className}>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>
            Please select a state.
            Resubmit the form once complete.
                    </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.closeModal} isOpen={this.state.stateSelected}>Cancel</Button>
          </ModalFooter>
        </Modal> : null}

        {this.state.profileUpdated ? <Modal isOpen={this.state.profileUpdated} toggle={this.closeModal} className={this.props.className}>
          <ModalHeader>Peregrinate</ModalHeader>
          <ModalBody>
            Profile Updated
                    </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.closeModal} isOpen={this.state.profileUpdated}>Cancel</Button>
          </ModalFooter>
        </Modal> : null}


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
                id="firstName"
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
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississipp">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
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
      </div>


    );
  }
}

export default ProfileForm;
