import axios from 'axios';
// config
import { HOST_API_KEY } from './config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API_KEY,
  headers: { Accept: "application/json" }
});

axiosInstance.interceptors.request.use(async (config) => {
  if (typeof window !== "undefined") {
    const session = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDI1OTEwYjEyNmNkN2IzMTRkMjE3OCIsInBob25lIjoiMDMyNjkwNTQwMCIsImlhdCI6MTc1MDMxNzI5OX0.7BEQhJC3sak0cQahgtVb2QSy7uSmU948c3OVRuN78wU"
    if (session) {
      config.headers["Authorization"] = `Bearer ${session}`
    } else {
      delete config.headers["Authorization"]
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
