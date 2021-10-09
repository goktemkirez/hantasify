import axios from "axios";

const API_KEY =
  "BQDNUEe4hx52p-m7zNPnWrbtos7HkRZDmmvzZitEPqrORDmRv5gkHzTy_IWPKevib5Hvg5C90Ce4Sb8ttJZruMofkmjur7rzI4ECyx9jDC29Hg48_akY5joeZovoTbsck2ryw7AS0mm1yvzi9cCAGhnIjQraHbigmK2G9SjhQZM50kQZobPSr5txDD0";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
