import axios from "axios";

export default {

  //***** USERS COLLECTION *****
  // Gets all users
  getUsers: function (query) {
    const queryString = query ? `?username=${query}` : "";
    return axios.get("/api/users" + queryString);
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
  },

  getCurrentFriends: function (id) {
    return axios.get("/api/friends/" + id);
  },

  getFriendSearch: function(id) {
    return axios.get("/api/friendspage/friends/" + id);
  },

  randomFLight: function (query){
    return axios.get("api/tripgenerator/random" + BASEURL + query + APIKEY);
  }

  
};

 export function getCities() {
  return axios.get("/api/cities");
};
