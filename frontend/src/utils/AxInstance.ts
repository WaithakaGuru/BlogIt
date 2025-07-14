import axios from "axios";

const axInstance = axios.create({
  // baseURL: "http://localhost:4556/api",
  baseURL: "https://blogit-backend-c286.onrender.com/",
  withCredentials: true,
});
export default axInstance;
