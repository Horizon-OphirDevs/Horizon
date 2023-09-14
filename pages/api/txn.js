// Import necessary libraries
import axios from 'axios';

// Define the API route handler
export default async (req, res) => {
  try {
    // Extract query parameters from the request
    const { walletAddress, page } = req.query;
    const offset = '10';
    const sort = 'asc';
    const apiKey ='E2T436336DVTJ676A15WURXT2PHM5E8QX8';

    // Construct the API URL with dynamic parameters
    const apiUrl = `https://api.arbiscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=latest&page=${page}&offset=${offset}&sort=${sort}&apikey=${apiKey}`;

    // Make a GET request to the API
    const response = await axios.get(apiUrl);

    // Extract and format the desired fields from each transaction object
    const formattedData = response.data.result.map((transaction) => ({
      functionName: transaction.functionName, // You'll need to determine how to extract the function name from the input field
      from: transaction.from,
      to: transaction.to,
      hash: transaction.hash,
      timeStamp: transaction.timeStamp,
      value: transaction.value,
      gas: transaction.gas,
    }));

    // Return the formatted data
    res.status(200).json(formattedData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
