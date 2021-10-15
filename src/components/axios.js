import axios from "axios";

const API_KEY =
  "BQADyDQuyiP_N14_08QF6TQG8uuXTPKhYhIpg2-xQ7IAqDDvqK4wEaPzEsQj5tKjSBm0L2SkGK8owRbJmKjiIaxXdjXSGudt4MCCNmLyGyMeXgHrt3O8dac303g61MZHE8Hn0UKObRMwAamSHpSQF46I5-mTElk9nBfu2N3xsqSZ8TrwHdeE1aAmk1w";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
