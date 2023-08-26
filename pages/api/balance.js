import axios from 'axios';

export default async (req, res) => {
  const apiUrl = "https://api.arbiscan.io/api";
  const apiKey = "YourApiKeyToken"; // Replace this with your actual API key
  const { walletAddress } = req.query;

  if (!walletAddress) {
    res.status(400).json({ error: "Wallet address is required" });
    return;
  }

  const url = `${apiUrl}?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === "1") {
      res.status(200).json({ balance: data.result });
    } else {
      res.status(500).json({ error: data.message });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
