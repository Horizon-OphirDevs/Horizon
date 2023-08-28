// lib/coingecko.js
import axios from 'axios';

const coingeckoAPI = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const searchCoins = async (query) => {
  try {
    const response = await coingeckoAPI.get(`/search`, {
      params: {
        query: query,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data from CoinGecko API:', error);
    throw error;
  }
};
