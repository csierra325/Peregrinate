import React, { Component } from "react";
import API from "../utils/API";
// const bcrypt = require('bcryptjs');

class Login extends Component {
    // Setting the initial values of this.state.username and this.state.password
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
                res.data.forEach((element, i) => {
                    // console.log(`For each username: ${element.username}`);
                    // console.log(`For each password: ${element.password}`)

                    // console.log(`condition part 1: ${element.username === usernameEntered}`);
                    // console.log(`condition part 2: ${element.password === passwordEntered}`);
                    // console.log(`What is the element: ${element.username}`)
                    if (element.username === usernameEntered && element.password === passwordEntered) {
                        alert("push to profile page");
                        window.id = element._id;
                        window.username = element.username;
                        this.props.history.push(`/profile/${window.id}`);
                    }
                })
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
            this.props.history.push(`/profile/${window.id}`)
        } else {
            alert('Try again!')
        }
    }

    addUser = () => {
        API.saveUser({ username: this.state.new_username, password: this.state.new_password_one })
            .then(res => {
                console.log(`res.data.-id: ${res.data._id}`);
                window.id = res.data._id;
                this.props.history.push(`/profile/${window.id}`);
                // window.id =  
                this.setState({ new_username: "", new_password_one: "", new_password_two: "" });
            })
            .catch(err => console.log(err))
    };

    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        if (name === 'existing_username' || name === 'new_username') {
            window.username = value;
            // update username
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
