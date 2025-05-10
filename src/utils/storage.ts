import { MMKV } from 'react-native-mmkv';

// Inicializa el almacenamiento
export const storage = new MMKV();

// Funciones utilitarias
export const Storage = {
  set: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  },
  get: <T>(key: string): T | null => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  remove: (key: string) => {
    storage.delete(key);
  },
};
