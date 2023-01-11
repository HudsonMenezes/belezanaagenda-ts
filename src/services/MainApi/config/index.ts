import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://54.207.210.24:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseApi;
