import axios from "axios";

const API_KEY =
  "BQDkGhN3MSAruqa_Xxp6zdAMxGF4UmSzjSQfAvw6huwXPlaz6LSTFW8aPfK3TPIP9n1MiB0bnThoIalERcjUdhuoArvKvMHZU_42iea9PthtAbZNaZiAj_d4Zep-ezTxcG_sLG89g9JQU_jKSz2GX5oLOk42FamcSno680N4yC55X22mmXylMTfQgsE";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
