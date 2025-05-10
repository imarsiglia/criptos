import axios from "axios";
import Config from 'react-native-config';

const baseURL = (Config.HOST_BASE_URL || '') + (Config.CONTEXT_BASE_URL || '');

// Configurar Axios
const apiClient = axios.create({
  //descomentar
  // baseURL, // La URL base para tus servicios
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Agregar el token a las solicitudes de Axios
apiClient.interceptors.request.use(
  async (config) => {
    // const token = fetchUserTokenFromCookie();
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;