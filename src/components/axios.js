import axios from "axios";

// const API_KEY = localStorage.getItem("apiKey");

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  // headers: {
  //   Authorization: `Bearer ${API_KEY}`,
  // },
});

export const setAuthorizationToken = (token) => {
  if (token) {
    authAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete authAxios.defaults.headers.common["Authorization"];
  }
};

export default authAxios;
