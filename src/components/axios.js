import axios from "axios";

const API_KEY =
  "BQAFTaGWGA6KUnLeLxoB41WcGf--VnzHyN_pcvDlEqzBk00U4RWBiMh5oUJO6WtITvOAb69UQEsp5Q4QGRfNlOA90XJCTwr412neqosXa17-FFNaiS--7qsjhwSvYQgH2voIp-TxeUXlL3UlQc8nbJIK_PHkfVc9EwCJK696G75icDiPKNMQ0_Tr6e8";

const authAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default authAxios;
