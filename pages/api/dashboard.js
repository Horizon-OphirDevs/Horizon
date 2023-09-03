import axios from 'axios';

export default async function handler(req, res) {
  const walletAddress = '0xddf2940Db6758308C60aC7F14267b8595B08bBD7';

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
      // Extract relevant data from the filtered positions
      const extractedData = response.data.data.map((item) => ({
        assetName: item.attributes.fungible_info.name, // Extract name from fungible_info
        quantity: item.attributes.quantity.float,
        value: item.attributes.value,
        price: item.attributes.price,
        icon: item.attributes.fungible_info.icon ? item.attributes.fungible_info.icon.url : null, // Check if icon exists
      }));

      res.status(200).json(extractedData);
    } else {
      res.status(400).json({ error: 'Invalid response format' });
    }
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
