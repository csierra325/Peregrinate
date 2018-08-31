import React, { Component } from "react";

class ProfileCard extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    image: "",
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
      image: ""
    });
  };

  render() {
    return (
      <div align="left">
        <img
          //src={this.state.src}
          src="https://via.placeholder.com/200x200"
          alt="Profile Image"
          class="img-thumbnail"
          name="image"
        />

        <form>
          <div class="form-group">
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileCard;
