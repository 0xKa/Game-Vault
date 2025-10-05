import axios from "axios";

const API_BASE_URL = "https://api.rawg.io/api/";

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

export default apiService;
