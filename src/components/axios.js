import axios from "axios";

const API_KEY =
  "BQAKQctqUY38K1HH4fPQ1fMtrnLNkoKL3p_OXqCWUo3YM2q7QzHYIc0QTPESlRBCnvSbsTtoHR3gsUQUNshOtnax3qOZmiGcMGq-73QtkwYwnIY3y0n7trqX0fbKlxWHmTC6S7Dy0gmrZUbNSKgdxUWXQqqBfydj72GgHWlBoz8gIUrCoPsRCxekMgk";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
