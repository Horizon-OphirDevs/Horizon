export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from CoinGecko API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
