/** @format */
import axios from "axios";
// import { API_URL } from "../config";

const instance = axios.create({
  baseURL: "http://localhost:3004/api",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
