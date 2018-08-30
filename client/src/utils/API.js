import axios from "axios";

export default {

  //***** USERS COLLECTION *****
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  updateUser: function(id, update){
    return axios.put()
  },

  //***** TRAVELED LIST COLLECTION *****
  getTravelList: function (id) {
    return axios.get("/api/travellist/" + id);
  },


  //***** BUCKETLIST COLLECTION *****



  //***** FRIEND TRAVEL LIST COLLECTION *****



  //  ForUser Profile
  getProfile: function (id) {
    return axios.get("/api/profile/" + id);
  },

  updateProfile: function(id){
    return axios.put("/api/profile/" + id);
  }
};
