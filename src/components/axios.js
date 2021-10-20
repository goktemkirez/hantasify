import axios from "axios";

const API_KEY =
  "BQDZxhD0q14g2oew0yovJyOKHRBb_0A1coDvICxnCmZEwLHy0xzW1doSfXvhofnpfhJcrSS49YGv09S0BH-8dNrtFuzga0W3xcMYRYYBxS6L2KtUwoDJITRJFquvGGOM8cOMAI7VIK4rAUj0Z9WYISmdvyAAfW_7eN-l53buAetOTFZ2zlmxiZzHlSN4cZziW7t7gtdsb8L1HA09pXfXZBwcGwHC0YgR5SlODq772rnerdXE-RP9IvRW3t4F_PGUw-p8nHRDQe8cnGMAc9QFnPpeSiK-pQ3XLaNrng";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
