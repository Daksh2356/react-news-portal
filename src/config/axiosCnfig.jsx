// src/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
    country: "us", // Default country can be set here if needed
  },
});

export default axiosInstance;
