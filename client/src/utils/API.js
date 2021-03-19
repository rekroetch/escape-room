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

  getAllPuzzles: function(puzzleData) {
    return axios.get("/api/puzzle", puzzleData)
  },

  getPuzzle: function(id) {
    return axios.get("/api/puzzle/" + id)
  },

  solved: function(id) {
    return axios.put("/api/puzzle/" + id)
  }
};
