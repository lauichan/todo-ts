import axios from "axios";

export const todoAPI = axios.create({
  baseURL: "http://localhost:4000",
});

