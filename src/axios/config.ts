import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.asdasdas,
});

export const nextInstance: AxiosInstance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use((data) => {
  return data;
});

nextInstance.interceptors.response.use((data) => {
  return data;
});

instance.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 400) {
        return {
          code: "400",
          message: "400",
        };
      }
      if (error.response.status === 401) {
        return {
          code: "401",
          message: "401",
        };
      }
      if (error.response.status === 403) {
        return {
          code: "403",
          message: "403",
        };
      }
      if (error.response.status === 404) {
        return {
          code: "404",
          message: "404",
        };
      }
    }
    return Promise.reject(error);
  }
);

nextInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return error;
  }
);
