import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // Địa chỉ json-server
});

export default instance;
