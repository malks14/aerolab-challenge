import axios from "axios";

export default axios.create({
  baseURL: "https://coding-challenge-api.aerolab.co",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRmMmIyYzEwYWNiZTAwMjFhZDVkNDMiLCJpYXQiOjE2NDIwMTU1MzJ9._lw9xtN_hFeD5saMplUZGo_b5F1a4ifblWW-Adm86WE",
  },
});
