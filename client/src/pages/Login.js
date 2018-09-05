import React, { Component } from "react";
import API from "../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
const bcrypt = require('bcryptjs');


class Login extends Component {
    // Setting the initial values of this.state.username and this.state.password
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            visible: false,
            passwordMatching: false
        };

        this.toggle = this.toggle.bind(this);
        // this.passwordMatchingToggle = this.passwordMatchingToggle.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    toggle() {
        this.props.history.push(`/profile/${window.id}`);
    };

    closeModal() {
        this.setState({
            modal: !this.state.modal
        });
    };

    // passwordMatchingToggle() {
    //     this.setState({
    //         passwordMatching: !this.state.modal
    //     });
    // }


    // closeModal(){
    //     this.setState({ passwordMatching: false });
    // }


    state = {
        currentPage: "Login",
        existing_username: "",
        existing_password: "",
        new_username: "",
        new_password_one: "",
        new_password_two: "",
    };

    // componentDidMount() {
    //     this.getUser();
    // }

    getUser = (usernameEntered, passwordEntered) => {
        API.getUsers()
            .then(res => {
                // res.data.dbModel
                const isAuthenticated = res.data.isAuthenticated;
                window.isAuthenticated = isAuthenticated;
                res.data.dbModel.forEach((element, i) => {
                    if (element.username === usernameEntered) {
                        bcrypt.compare(passwordEntered, element.password, (err, res) => {
                            // console.log(`Is the password correct? ${res}`)
                            if (res) {
                                window.id = element._id;
                                window.username = element.username;
                                this.props.history.push(`/profile/${window.id}`);
                            } else {
                                alert('Username or Password is incorrect');
                            }
                        });
                    }
                })
            })
            .catch(error => {
                const isAuthenticated = error.response.data.isAuthenticated;
                window.isAuthenticated = isAuthenticated;
                console.log(`isAuthenticated: ${error.response.data.isAuthenticated}`);
            });
    };

    addUser = (passwordOneEntered, passwordTwoEntered) => {

        // if (passwordOneEntered !== passwordTwoEntered) {
        //     // alert('Passwords do not match. Please try again.');
        //     this.setState({ passwordMatching: true });
        // }

        if (passwordOneEntered === passwordTwoEntered) {
            API.saveUser({ username: this.state.new_username, password: this.state.new_password_one })
                .then(res => {
                    const isAuthenticated = res.data.isAuthenticated;
                    window.isAuthenticated = isAuthenticated;
                    window.id = res.data.dbModel._id;
                    this.setState({ modal: true });

                    this.setState({ new_username: "", new_password_one: "", new_password_two: "" });

                    // if (passwordOneEntered === passwordTwoEntered) {
                    //     // alert(`Account Created`);
                    //     // this.toggle();
                    //     // window.confirm('Account Created');
                    //     // document.getElementById("accountCreatedmodal").modal("toggle");
                    // }
                })
                .catch(error => {
                    // console.log(err);
                    const isAuthenticated = error.response.data.isAuthenticated;
                    window.isAuthenticated = isAuthenticated;

                    if (error) {
                        alert('please choose another username!')
                    }
                });
        }
    };

    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)


        const { name, value } = event.target;

        if (name === 'existing_username' || name === 'new_username') {
            // Update username
            window.username = value;
        }

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };



    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmitExistingUser = event => {
        event.preventDefault();
        if (this.state.existing_username && this.state.existing_password) {
            // console.log(`Existing User\n--------------\nUsername: ${this.state.existing_username}\nPassword: ${this.state.existing_password}\n--------------`);
            this.setState({ existing_username: "", existing_password: "" });
            this.getUser(this.state.existing_username, this.state.existing_password);
        } else {
            alert(`Enter existing username and password`);
        }
    };

    handleFormSubmitNewUser = event => {
        event.preventDefault();
        // console.log(`New User\n----------------\nUsername: ${this.state.new_username}\nPassword One: ${this.state.new_password_one} \nPassword Two:${this.state.new_password_two}\n--------------`);
        // if (this.state.new_password_one === this.state.new_password_one)
        this.addUser(this.state.new_password_one, this.state.new_password_two);
    }

    render() {
        return (
            <div>

                {this.state.modal ? <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Welcome to Peregrinate!</ModalHeader>
                    <ModalBody>

                        “A journey is measured in friends rather than miles.”


                        – Tim Cahill
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </ModalFooter>
                </Modal> : null}

                



                <h4>Existing User</h4>
                <form>
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
                    <button
                        onClick={this.handleFormSubmitExistingUser}
                        isOpen={this.state.modal}
                    >Login</button>
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
