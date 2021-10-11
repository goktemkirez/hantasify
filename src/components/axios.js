import axios from "axios";

const API_KEY =
  "BQBYzXPmXpWnYasB3hNRKZEi8lH0E718TprW-z7U89HeIv3gjyyanI1Gwslu9dnKWy-XdGlZKUNLSUBI8c5wa65wz4TGf2uqMnZg3mKK3piwaHK9OwXfeH9PwVSzOBVq5NnMXJ3RkCwCh0sOKr4rhtonOyR19yeDJZH-_EiEax0NgE_h1CMUFDXp8RA";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
