import axios from 'axios';

export default async function handler(req, res) {
  const apiUrl = "https://api.arbiscan.io/api";
  const apiKey = "E2T436336DVTJ676A15WURXT2PHM5E8QX8"; // Replace with your actual API key
  const { walletAddress } = req.query;

  if (!walletAddress) {
    res.status(400).json({ error: "Wallet address is required" });
    return;
  }

  // Construct the API URL for transaction history
  const txHistoryUrl = `${apiUrl}?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=latest&page=1&offset=10&sort=asc&apikey=${apiKey}`;

  try {
    // Fetch transaction history data
    const txHistoryResponse = await axios.get(txHistoryUrl);
    const txHistoryData = txHistoryResponse.data;

    // Extract and transform relevant fields
    const transformedData = txHistoryData.result.map(tx => ({
      txnHash: tx.hash,
      method: tx.input,
      time: new Date(parseInt(tx.timeStamp) * 1000),
      to: tx.to,
      from: tx.from,
      quantity: tx.value,
    }));

    console.log(transformedData)

    res.status(200).json(transformedData);
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    res.status(500).json({ error: 'An error occurred while fetching transaction history.' });
  }
}