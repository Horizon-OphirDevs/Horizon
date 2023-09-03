import axios from 'axios';

export default async function handler(req, res) {
  const { walletAddress } = req.query;

  if (!walletAddress) {
    return res.status(400).json({ error: 'Address is required' });
  }

  const options = {
    method: 'GET',
    url: `https://api.zerion.io/v1/wallets/${walletAddress}/positions/`,
    params: { currency: 'usd', 'filter[trash]': 'only_non_trash', sort: 'value' },
    headers: {
      accept: 'application/json',
      authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg==',
    },
  };

  try {
    const response = await axios.request(options);

    // Check if the response has a "data" property which is an array.
    if (Array.isArray(response.data.data)) {
      // Filter positions that belong to the Arbitrum chain
      const arbitrumPositions = response.data.data.filter((position) => {
        return position.relationships.chain.data.id === 'arbitrum';
      });

      // Extract relevant data from the filtered positions
      const extractedData = arbitrumPositions.map((item) => ({
        assetName: item.attributes.fungible_info.name, // Extract name from fungible_info
        quantity: item.attributes.quantity.float,
        value: item.attributes.value,
        price: item.attributes.price,
      }));

      res.status(200).json(extractedData);
    } else {
      res.status(400).json({ error: 'Invalid response format' });
    }
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
