import { Cryptocurrency } from './Cryptocurrency';

export interface CryptoResponse {
  data: Cryptocurrency[];
  info: {
    coins_num: number;
    time: number;
  };
}