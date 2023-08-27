// pages/api/search.js
import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search', {
      params: {
        query: query,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from CoinGecko API:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
