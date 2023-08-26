// pages/api/coin-data.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: true,
        price_change_percentage: '24h',
        locale: 'en',
      },
    });

    const coinsData = response.data.map(coin => ({
      name: coin.name,
      current_price: coin.current_price,
      total_volume: coin.total_volume,
      market_cap: coin.market_cap,
      price_change_percentage: coin.price_change_percentage_24h,
      image: coin.image,
      sparkline: coin.sparkline_in_7d.price,
      total_supply: coin.total_supply,
    }));

    res.status(200).json(coinsData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
