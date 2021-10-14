import axios from "axios";

const API_KEY =
  "BQBKKCdSUyxmdojQ8NuvPNeevVSzVLZrHIFSVxg6yLj_ZTepZyEX4moPa2nlFWeqPuwdy3d436dGFF2NWFKbJDryp8oUYEmxfOkIm5ZD72pg2KZe7BjDDWBsmDYsPt1alhztHS818nVM4tAKcGXo0byqCN7eMWFRWUDbdVufwS10ErZa8M7iP0-8IGo";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
