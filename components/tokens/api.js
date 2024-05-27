import axios from "axios";
import { BASE_URL } from "../endpoints/endpoint";
import { getAccessToken, refreshAccessToken } from "./tokenManager";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    } catch (err) {
      console.error("Error in request interceptor:", err);
      return Promise.reject(err);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (error) {
        // Handle refresh token failure
        console.error("Error refreshing access token:", err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
