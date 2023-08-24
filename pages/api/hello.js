// pages/arbiscan.js
import axios from 'axios';
import { useAddress } from "@thirdweb-dev/react";

export default async (req, res) => {
  try {
    const apiUrl = 'https://api.arbiscan.io/api';
    const address = useAddress();
    const queryParams = new URLSearchParams({
      module: 'account',
      action: 'txlist',
      address: address,
      startblock: 0,
      endblock: 'latest',
      page: 1,
      offset: 10,
      sort: 'asc',
      apikey: 'E2T436336DVTJ676A15WURXT2PHM5E8QX8', // Replace with your actual API key
    });

    const response = await axios.get(`${apiUrl}?${queryParams.toString()}`);
    const transactions = response.data.result; // Extract transactions array from API response

    // Extracting required data fields from each transaction
    const extractedData = transactions.map(transaction => ({
      txnHash: transaction.hash,
      method: transaction.input,
      time: new Date(parseInt(transaction.timeStamp) * 1000).toLocaleString(),
      from: transaction.from,
      to: transaction.to,
      quantity: transaction.value / 1e18, // Assuming the quantity is in Wei, converting to Ether
    }));

    res.status(200).json(extractedData);
  } catch (error) {
    console.error('Error calling Arbiscan API:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
