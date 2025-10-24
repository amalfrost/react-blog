import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // replace with your backend URL
  withCredentials: true, // if your backend uses cookies
});

export default api;
