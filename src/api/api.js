import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

axios.defaults.headers.common[
  "Authorization"
] = `Client-ID Tnb7MID9Zf_QNceXOdeFfDY8N1SWYq_lPMJ_UdMGvIE`;

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page,
    },
  });
  return response.data.results;
};
