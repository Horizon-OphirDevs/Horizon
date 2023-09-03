// pages/api/getPortfolio.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { walletAddress } = req.query;

    if (!walletAddress) {
      res.status(400).json({ error: "Wallet address is required" });
      return;
  }

    const options = {
      method: 'GET',
      url: `https://api.zerion.io/v1/wallets/${walletAddress}/portfolio/`,
      params: { currency: 'usd' },
      headers: {
        accept: 'application/json',
        authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg==',
      },
    };

    const response = await axios.request(options);

    // Extract the "arbitrum" value from positions_distribution_by_chain
    const arbitrumDistribution = response.data.data.attributes.positions_distribution_by_chain.arbitrum;

    res.status(200).json({ arbitrumDistribution });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'An error occurred' });
  }
}
