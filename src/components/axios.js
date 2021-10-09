import axios from "axios";

const API_KEY =
  "BQD8tz_e6OrLbbJM9ySdqt7g3WlNXDlJ81pMZ11e2KskS1L7yfw7ZNNiSiMLaDc4HuAR9jQIpCTN6zBsgmFtZ_h52G9JYoSWO_sOempR67uFGtu2DxAvwHbN0updsfx_GwVpSkBHdPqLrqmYPgPtU8q2I7SljpM8NAnB6RKpIdvJY8SEldIjQBEq7iY";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
