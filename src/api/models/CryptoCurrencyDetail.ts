import {Cryptocurrency} from './Cryptocurrency';

export interface CryptoCurrencyDetail extends Cryptocurrency {
  price_btc: string;
  volume24a: number;
}
