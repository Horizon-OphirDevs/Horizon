import axios from 'axios';
const sdk = require('api')('@chainbase/v1.0#1kyz5d4liym8zdw');

export default async (req, res) => {
  const apiKey = '2Ubr7CKu26athkPkImSWHDiG1TL'; // Your API key
  const walletAddress = req.query.walletAddress; // Retrieve walletAddress from query

  try {
    const response = await sdk.getAccountTokens({
      chain_id: '42161',
      address: walletAddress,
      limit: '20',
      page: '1',
      'x-api-key': apiKey
    });

    const responseData = response.data;

    if (responseData.code === 1) {
      res.status(500).json({ error: responseData.error });
    } else {
      const extractedData = responseData.tokens.map(token => ({
        name: token.name,
        current_usd_price: token.current_usd_price,
        logos: token.logos
      }));
      
      res.status(200).json(extractedData);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
