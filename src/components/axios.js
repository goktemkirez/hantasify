import axios from "axios";

const API_KEY =
  "BQBST2pJvHUR_J_xDr_A8uicgvLCiCCN_L9de-z_2ygfi0KiW231oObesku0kHJlZyGDtA0uqq33d9KHLeMsb8Z8bpZ2jHzrcNvKLJ5uRwjqY9fbCt352YM6Kw1XkE16GqZdDURN0K-zIQ8uSPY1yT065dMIlABbKj3U5x4QzN_QpmCJrV2Ka5objlU";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
