import axios from "axios";

export default {
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },

  checkUser: function(userData) {
    return axios.post("/api/user/login", userData);
  },

  validateUser: function(userData) {
    return axios.get(`/api/user/validate?secret_token=${userData}`)
  },

  logout: function(userData) {
    return axios.post("/api/user/logout", userData);
  },

  safeCracked: function(safeData) {
    return axios.put("/api/puzzle/:id", safeData)
  }
};
