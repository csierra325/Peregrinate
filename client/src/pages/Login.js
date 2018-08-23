import React, { Component } from "react";
// import axios from "axios";
import API from "../utils/API";

class Login extends Component {
    // Setting the initial values of this.state.username and this.state.password
    state = {
        existing_username: "",
        existing_password: "",
        new_username: "",
        new_password_one: "",
        new_password_two: ""
    };
    // componentDidMount() {
    //     this.addUser();
    // }

    addUser = () => {
        API.saveUser({username: this.state.new_username, password: this.state.new_password_one})
            .then(res =>
               console.log(res.data)
            )
            .catch(err => console.log(err))
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
    handleFormSubmitExistingUser = event => {
        event.preventDefault();
        console.log(`Existing User\n--------------\nUsername: ${this.state.existing_username}\nPassword: ${this.state.existing_password}\n--------------`);
        this.setState({ existing_username: "", existing_password: "" });
    };

    handleFormSubmitNewUser = event => {
        event.preventDefault();
        console.log(`New User\n----------------\nUsername: ${this.state.new_username}\nPassword One: ${this.state.new_password_one} \nPassword Two:${this.state.new_password_two}\n--------------`);
        // this.setState({ new_username: "", new_password_one: "", new_password_two: "" });
        if (this.state.new_password_one === this.state.new_password_two) {
            alert(`Passwords match!`);
            this.addUser();

        } else {
            alert(`Passwords don't match`);
        }
    }

    render() {
        return (
            <div>
                <h4>Existing User</h4>
                <form>
                    {/* <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p> */}
                    <input
                        type="text"
                        placeholder="Username"
                        name="existing_username"
                        value={this.state.existing_username}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        name="existing_password"
                        value={this.state.existing_password}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button onClick={this.handleFormSubmitExistingUser}>Login</button>
                </form>
                <br />
                <br />

                <h4>New User</h4>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        name="new_username"
                        value={this.state.new_username}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        name="new_password_one"
                        value={this.state.new_password_one}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        name="new_password_two"
                        value={this.state.new_password_two}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button onClick={this.handleFormSubmitNewUser}
                    >Login</button>
                </form>
            </div>

        );
    }
}

export default Login;
