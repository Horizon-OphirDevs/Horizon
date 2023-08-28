import { data } from 'autoprefixer';
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

    const data = response.data;
    console.log(data);

    if (data.code === 1) {
      res.status(500).json({ error: data.error });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

