import {CryptoCurrencyDetail} from '@api/models/CryptoCurrencyDetail';
import {CryptoResponse} from '@api/models/CryptoResponse';
import {LIMIT_PER_LOAD} from '@utils/constants';
import {getRequest} from '../apiClientHelper';
import {ENDPOINT_GET_CRYPTO, ENDPOINT_GET_CRYPTOS} from '../endpoints';

const fetchCurrencies = async ({
  pageParam = 0,
  limit = LIMIT_PER_LOAD,
}): Promise<CryptoResponse> => {
  const response = await getRequest<CryptoResponse>(
    `${ENDPOINT_GET_CRYPTOS}?start=${pageParam}&limit=${limit}`,
  );
  return response;
};

const getCurrency = async ({
  id,
}: {
  id: string;
}): Promise<CryptoCurrencyDetail | undefined> => {
  const response = await getRequest<CryptoCurrencyDetail[]>(
    `${ENDPOINT_GET_CRYPTO}?id=${id}`,
  );
  return response[0];
};

export const cryptoServices = {
  fetchCurrencies,
  getCurrency,
};
