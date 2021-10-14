import axios from "axios";

const API_KEY =
  "BQDXeoVcZC28wVDvDT_Ony1CNaig3YugaS5bKJF1XrxQiV5b6IhIC9qted8OGZrHzniQmwKM_IVPqQH-7jwY6t3-I-Sbdvg36xw7mFWBlq4-MG3zB6-5QY_faJyENkvI6jciJbD-fkZWdBb5Nc4yD9DFuYlTS9v9kT1aix_enLEzyxgU2cOQDGNCDNA";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
