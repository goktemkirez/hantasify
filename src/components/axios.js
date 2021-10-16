import axios from "axios";

const API_KEY =
  "BQCdI6AhCmDTeqNpgMkuLDRq2I4HAT6SLAPbwIwZMopcXmRNanQb5UEtCo4cb_FcY6oO4m5Jc4PbY6NBMXpMbUdwZWM-H_8VsaKWnH9J59QqbS3c8tUulrQxf39uT3nxHnhu3xDaXcwavbqNnzzh20HDfC_y2fSni5xHKjMFCAbNSchzZC9CnYB5LXI";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
