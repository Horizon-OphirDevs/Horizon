// pages/api/portfolio.js
export default async function handler(req, res) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg=='
    }
  };

  try {
    const response = await fetch('https://api.zerion.io/v1/wallets/address/portfolio/?currency=usd', options);
    const data = await response.json();
    console.log(data);
    res.status(200).json(data); // Sending fetched data as the API response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
