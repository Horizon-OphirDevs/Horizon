// Import necessary libraries
import axios from 'axios';

// Define the API route handler
export default async (req, res) => {
  try {
    // Extract query parameters from the request
    const { walletAddress } = req.query;
   // const walletAddress = '0x1a97a5a0063d837fd3365e71e5bdc3894e833e6d';
    const page = '1';
    const offset = '10000';
    const sort = 'asc';
    const apiKey ='E2T436336DVTJ676A15WURXT2PHM5E8QX8';

    // Construct the API URL with dynamic parameters
    const apiUrl = `https://api.arbiscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=latest&page=${page}&offset=${offset}&sort=${sort}&apikey=${apiKey}`;

    // Make a GET request to the API
    const response1 = await axios.get(apiUrl);

    // Extract the total number of transactions from the API response
    const totalTransactions = response1.data.result.length;

    // Extract and format the desired fields from each transaction object
    const formattedData = response1.data.result.map((transaction) => ({
      functionName: transaction.functionName, // You'll need to determine how to extract the function name from the input field
      from: transaction.from,
      to: transaction.to,
      hash: transaction.hash,
      timeStamp: transaction.timeStamp,
      value: transaction.value,
      gas: transaction.gas,
    }));

    // Return the formatted data along with the total number of transactions
    res.status(200).json({
      totalTransactions,
      transactions: formattedData,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
