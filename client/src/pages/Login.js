import React, { Component } from "react";
// import axios from "axios";
import API from "../utils/API";
// var bcrypt = require('bcrypt');
// const bcrypt = require('bcryptjs');
// import bcrypt from 'bcrypt'


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
    //     this.getUser();
    // }

    getUser = (users_name, users_password) => {
        // console.log(users_name);
        var databaseUsername;
        var usernameEntered;
        var passwordEntered;
        var databasePassword;
        API.getUser(users_name)
            .then(res => {
                console.log(`returned user from database: ${res.data[0].username}`);
                console.log(`this.state.existing_username: ${users_name}`);
                databaseUsername = res.data[0].username;
                databasePassword = res.data[0].password;
                usernameEntered = users_name;
                passwordEntered = users_password;
                console.log(`Made variables: ${databaseUsername} and ${usernameEntered}`);
                this.accountConfirmation(usernameEntered, databaseUsername, passwordEntered, databasePassword);
            })
            .catch(err => console.log(err));
    };

    accountConfirmation = (usernameEntered, databaseUsername, passwordEntered, databasePassword) => {
        // bcrypt.compare(passwordEntered, databasePassword, function(err, res) {
        //     console.log(`Bcrypt \nPassword Entered: ${passwordEntered} \nHash: ${databasePassword}`)
        // });
        console.log(`databasePassword: ${databasePassword}`);

        // app.get("/home/:Email/:Password", function (req, res) {
        //     console.log(req.params.Email);

        //     console.log(req.params.Password);
        //     bcrypt.genSalt(10, function (err, salt) {
        //         bcrypt.hash(req.params.Password, salt, function (err, hash) {
        //             req.params.Password = hash;
        //             encp = req.params.Password;

        //             console.log("Enc", encp);
        //             db.User.findOne({ where: { Email: req.params.Email }, $and: { Password: encp } }).then(function (dbUser) {
        //                 console.log(dbUser);
        //                 if (!dbUser) {
        //                     res.render("404");
        //                 } else if (!dbUser.Password) {
        //                     res.render("403");
        //                 } else {
        //                     res.render("home", { email: dbUser.Email });
        //                     // res.json(dbUser);
        //                 }

        //             });
        //         });
        //     });

        //     // db.User.findOne({ where: { Email: req.params.Email }, include: [db.PostContent], order:[[db.PostContent,"createdAt", 'DESC']] }).then(function(dbUser){
        //     //   console.log(dbUser);
        //     //   if(!dbUser){
        //     //     res.render("404");
        //     //   } else{
        //     //     res.render("home", {email: dbUser.Email, content: dbUser.PostContents});
        //     //     res.json(dbUser);

        //     //   }

        //     // });

        // });

        if (usernameEntered === databaseUsername && passwordEntered === databasePassword) {
            alert("username and passwords match!");
            console.log(this.props.match);
            this.props.history.push(`/profile/${databaseUsername}`)

        } else {
            alert('Try again!')
        }
        // console.log(`Username Ented: ${usernameEntered} \nDatabase username: ${databaseUsername}`)
    }

    addUser = () => {
        API.saveUser({ username: this.state.new_username, password: this.state.new_password_one })
            .then(res =>
                console.log(res.data),
                this.setState({ new_username: "", new_password_one: "", new_password_two: "" }),
                console.log(`Props: ${JSON.stringify(this.props)} \nPath: ${this.props.match.path}`),
                //    this.props.match.path = "/Profile/",
                this.props.history.push(`/profile/${this.state.new_username}`)

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
        if (this.state.existing_username && this.state.existing_password) {
            console.log(`Existing User\n--------------\nUsername: ${this.state.existing_username}\nPassword: ${this.state.existing_password}\n--------------`);
            this.setState({ existing_username: "", existing_password: "" });
            this.getUser(this.state.existing_username, this.state.existing_password);

        } else {
            alert(`Enter existing username and password`);
        }


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
                {/* <Profile username={}/> */}
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
