import axios from "axios";

const API_KEY =
  "BQCDD8UpPSaWgh3t1M8LXhjsrKTbnXw1zCBIyvZTzzZXculEDpd61i_x_G2iC5PAQlARuet5MLPgRTiX1E1yQFPW0DyIYDlIXIKDMn6SauVinvb5kbAcHaFJtDbVKZUBuxFJiy5tFM8mbSSKKHnFvu2RFFkayGW9Yao4Y4A6THm8mwoJBSeMJgMdiJo";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
