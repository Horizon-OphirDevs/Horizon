import axios from 'axios';

export default async (req, res) => {
  try {
    // Hardcoded wallet address and page number
    const { walletAddress } = req.query;
    const page = 1; // You can change this to any page number you want
    const pageSize = 10; // Number of transactions per page

    const options = {
      method: 'GET',
      url: `https://api.zerion.io/v1/wallets/${walletAddress}/transactions/`,
      params: {
        currency: 'usd',
        'page[size]': pageSize,
        'page[number]': page,
        'filter[chain_ids]': 'arbitrum',
      },
      headers: {
        accept: 'application/json',
        authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg==',
      },
    };

    const response = await axios.request(options);
    const transactionsData = response.data.data;

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
