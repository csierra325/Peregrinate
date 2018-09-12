import React, { Component } from "react";
import API from "../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginJumbotron from "../components/LoginJumbotron";

const bcrypt = require('bcryptjs');


class Login extends Component {
    // Setting the initial values of this.state.username and this.state.password
    constructor(props) {
        super(props);
        this.state = {
            accountCreatedModal: false,
            passwordMatching: false,
            chooseAnotherUsername: false,
            loginAuth: false,
            existingUserField: false,
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
            passwordMatching: false,
            chooseAnotherUsername: false,
            loginAuth: false,
            existingUserField: false,
        });
    };

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
                            if (res) {
                                window.id = element._id;
                                window.username = element.username;
                                this.props.history.push(`/profile/${window.id}`);
                            } else {
                                this.setState({ loginAuth: true });
                            }
                        });
                    }
                })
            })
            .catch(error => {
                const isAuthenticated = error.response.data.isAuthenticated;
                window.isAuthenticated = isAuthenticated;
            });
    };

    addUser = (passwordOneEntered, passwordTwoEntered) => {

        if (passwordOneEntered !== passwordTwoEntered) {
            this.setState({ passwordMatching: true });
        }

        if (passwordOneEntered === passwordTwoEntered) {
            API.saveUser({ username: this.state.new_username, password: this.state.new_password_one })
                .then(res => {
                    const isAuthenticated = res.data.isAuthenticated;
                    window.isAuthenticated = isAuthenticated;
                    window.id = res.data.dbModel._id;
                    this.setState({ accountCreatedModal: true });

                    this.setState({ new_username: "", new_password_one: "", new_password_two: "" });
                })
                .catch(error => {
                    const isAuthenticated = error.response.data.isAuthenticated;
                    window.isAuthenticated = isAuthenticated;

                    if (error) {
                        this.setState({ chooseAnotherUsername: true });
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
            this.setState({ existing_username: "", existing_password: "" });
            this.getUser(this.state.existing_username, this.state.existing_password);
        } else {
            // alert(`Enter existing username and password`);
            this.setState({ existingUserField: true });
        }
    };

    handleFormSubmitNewUser = event => {
        event.preventDefault();
        this.addUser(this.state.new_password_one, this.state.new_password_two);
    }

    render() {
        return (
            <div>
                <LoginJumbotron >
                    {this.state.accountCreatedModal ? <Modal isOpen={this.state.accountCreatedModal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Welcome to Peregrinate!</ModalHeader>
                        <ModalBody>
                            “A journey is measured in friends rather than miles.”
                            – Tim Cahill
                    </ModalBody>
                        <ModalFooter>
                            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                        </ModalFooter>
                    </Modal> : null}

                    {this.state.passwordMatching ? <Modal isOpen={this.state.passwordMatching} toggle={this.closeModal} className={this.props.className}>
                        <ModalHeader>Error</ModalHeader>
                        <ModalBody>
                            Passwords do not match. Please try again.
                    </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.closeModal} isOpen={this.state.passwordMatching}>Cancel</Button>
                        </ModalFooter>
                    </Modal> : null}

                    {this.state.chooseAnotherUsername ? <Modal isOpen={this.state.chooseAnotherUsername} toggle={this.closeModal} className={this.props.className}>
                        <ModalHeader>Error</ModalHeader>
                        <ModalBody>
                            Please choose another username
                    </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.closeModal} isOpen={this.state.chooseAnotherUsername}>Cancel</Button>
                        </ModalFooter>
                    </Modal> : null}

                    {this.state.loginAuth ? <Modal isOpen={this.state.loginAuth} toggle={this.closeModal} className={this.props.className}>
                        <ModalHeader>Error</ModalHeader>
                        <ModalBody>
                            Username or Password is incorrect
                    </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.closeModal} isOpen={this.state.loginAuth}>Cancel</Button>
                        </ModalFooter>
                    </Modal> : null}



                    {this.state.existingUserField ? <Modal isOpen={this.state.existingUserField} toggle={this.closeModal} className={this.props.className}>
                        <ModalHeader>Error</ModalHeader>
                        <ModalBody>
                            Enter existing username and password
                    </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.closeModal} isOpen={this.state.existingUserField}>Cancel</Button>
                        </ModalFooter>
                    </Modal> : null}

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="card col-4">

                            <div className="card-body">
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
                                       
                                    >Login</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-2"></div>

                        <div className="card col-4">
                            <div className="card-body">

                                <h4 className="card-text">Create New User</h4>
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
                        </div>
                    </div>


                  
                </LoginJumbotron>
            </div >
        );
    }
}

export default Login;
