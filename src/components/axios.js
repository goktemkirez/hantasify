import axios from "axios";

const API_KEY =
  "BQAb0_AbBE6uRl6twPA9mmVpobp7W6V_SI8DHfQANy9aPqSCipOm2-jlJXcF2BMzSN8jGIKqIqpgQP5IVgyy--TYLOTS9wap46lzCMZYnCHih9bzbbr4SPKYBaXrClddvaIcxJpTRDZIZpLCr9eNWmvexV1Q-ASkY6IAfaS07QBh_gwSGWCp2Jyc53LxKbiIkMSd4WU6FDEMXL4UQ18CnzO2Grqyc1qVUxxUDcqDj_AOEkLlZTLKvaL6v4BE6VJUmv0M6pFWcegs8iZ4aBnKlDxcPa6WcBWAjjiCgQ";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
