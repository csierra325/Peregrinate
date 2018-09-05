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
  
  updateUser: function(id, userdata){
    return axios.put("/api/users/" + id, userdata)
  }

};


 export function getCities() {
  return axios.get("/api/cities");
};
