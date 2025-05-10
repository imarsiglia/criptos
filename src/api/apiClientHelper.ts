import apiClient from './apiClient';
import {AxiosRequestConfig} from 'axios';

/**
 * Manejador de errores global para todas las peticiones.
 */
export const handleRequestError = (error: any): never => {
  if (error.response) {
    //@ts-ignore
    throw new Error(error.response.data.message || 'Error');
  }
  //@ts-ignore
  throw new Error(error.message || 'Error desconocido');
};

/**
 * Realiza una petición POST genérica con manejo de errores.
 */
export const postRequest = async <T>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig<any>,
): Promise<T> => {
  try {
    const response = await apiClient.post<T>(
      endpoint,
      data,
      config,
    );
    return response.data;
  } catch (error: any) {
    handleRequestError(error);
    //@ts-ignore
    throw new Error(error?.message || 'Error en la solicitud');
  }
};

export const getRequest = async <T>(
  endpoint: string,
): Promise<T> => {
  try {
    const response = await apiClient.get<T>(endpoint);
    return response.data;
  } catch (error: any) {
    handleRequestError(error);
    throw new Error(error?.message || 'Error en la solicitud');
  }
};
