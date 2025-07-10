import axios from "axios";

const axInstance = axios.create({
  baseURL: "http://localhost:4556/api",
  withCredentials: true,
});
export default axInstance;
