import axios from "axios";

const API_KEY =
  "BQALjAf2Ys4vd67_0iaMFu9fs4YEp-if9puC27GZHjJ3l1uLidnCH-yDqeeksQfVpmivyymFNpeXZb6MfkN46rIt8psJkf_RUfDGkihZ954J_GP2ynpd-IfMtJdCPiIbX9-zpSCS9E_SHpZZKj5sw7AHMzlIyCBo97vV3Fn5JPzhI3eeg6a3ZlYqZmw";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
