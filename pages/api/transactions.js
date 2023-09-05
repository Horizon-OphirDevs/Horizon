import axios from 'axios';

export default async (req, res) => {
  try {
    const { walletAddress } = req.query;

    if (!walletAddress) {
      return res.status(400).json({ error: 'Address is required' });
    }
  

    const options = {
      method: 'GET',
      url: `https://api.zerion.io/v1/wallets/${walletAddress}/transactions/`,
      params: { currency: 'usd', 'page[size]': '100', 'filter[chain_ids]': 'arbitrum' },
      headers: {
        accept: 'application/json',
        authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg=='
      }
    };

    const response = await axios.request(options);
    const transactionsData = response.data.data; // Select the 'data' array from the response

    // Extract the desired fields from each transaction and create a new array
    const simplifiedTransactions = transactionsData.map((transaction) => ({
      method: transaction.attributes.operation_type,
      time: transaction.attributes.mined_at,
      txnHash: transaction.attributes.hash,
      from: transaction.attributes.sent_from,
      to: transaction.attributes.sent_to,
      status: transaction.attributes.status,
      quantity: parseFloat(transaction.attributes.fee.quantity.float),
    }));

    res.status(200).json({ simplifiedTransactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};



