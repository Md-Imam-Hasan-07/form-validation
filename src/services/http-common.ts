import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
