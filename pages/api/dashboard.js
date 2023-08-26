// pages/api/fetchPortfolio.js
import fetch from 'node-fetch'; // Import node-fetch

export default async function handler(req, res) {
  const address = req.query.address;

  try {
    const apiUrl = `https://api.zerion.io/v1/wallets/${address}/portfolio/?currency=usd`;
    const options = {
      headers: {
        Authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg==',
      },
    };

    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
