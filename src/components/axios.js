import axios from "axios";

const API_KEY =
  "BQDT0C2sWhFgzy33FHNKapHcq99D3H0eve6tjVJDM_FbDwOprc8IjSKpxPfHEQFVZ_0l8-SiGBsORgVobKbbTZLadLRxKLzD_HPLIwohomPS-w9qQL_WjV40V7t4FQrRbTzx-RpLqQfdlFu4nys1Qi5AL3zT9hFu1totiklfe7jg7eYtGS366fcDdnw";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
