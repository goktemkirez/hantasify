import axios from "axios";

const API_KEY =
  "BQA6dV32M_nBJCFdbR5WcLw4pNPFzpIUQn1KDdFiXorPh5-G4IGtfo4ZG8wQJcvDprKeUx_JkmjrLsitHx4IkMB5Ca6VWNS57REANM4iVLGuY71DKOJN6FBHsKNaqz17g0VkJ4cg7ObgUtpXceoSBe0g54N-iX8BmuvUOSoVHkEiPDngHS6VpRXceao";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
