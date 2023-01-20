import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://132.226.160.248:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseApi;
