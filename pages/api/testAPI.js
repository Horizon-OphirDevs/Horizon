// pages/arbiscan.js
const axios = require("axios");

const testing = async () => {
  try {
    const apiUrl = "https://api.arbiscan.io/api";
    const queryParams = new URLSearchParams({
      module: "account",
      action: "txlist",
      address: "0xf3fc178157fb3c87548baa86f9d24ba38e649b58", // treasury: 0xf3fc178157fb3c87548baa86f9d24ba38e649b58
      startblock: 0,
      endblock: "latest",
      page: 1,
      offset: 10,
      sort: "asc",
      apikey: "E2T436336DVTJ676A15WURXT2PHM5E8QX8", // Replace with your actual API key
    });
    // console.log(queryParams);

    const response = await axios.get(`${apiUrl}?${queryParams.toString()}`);
    // console.log(
    //   `Status: ${response.status}\n`,
    //   `Url: ${response.config.url}\n`,
    //   response.data
    // );
    // ("https://api.arbiscan.io/api?");
    // "https://api.arbiscan.io/api?module=account&action=txlist&address=0xDEF461ebF44B38F7476928Cea2047353802a43B0&startblock=0&page=1&offset=10&sort=asc&apikey=E2T436336DVTJ676A15WURXT2PHM5E8QX8"(
    //   "https://api.arbiscan.io/api?module=account&action=txlist&address=0xDEF461ebF44B38F7476928Cea2047353802a43B0&startblock=0&page=1&offset=10&sort=asc&apikey=E2T436336DVTJ676A15WURXT2PHM5E8QX8"
    // );

    const transactions = response.data.result; // Extract transactions array from API response
    console.log(transactions);

    // Extracting required data fields from each transaction
    const extractedData = transactions.map((transaction) => ({
      txnHash: transaction.hash,
      method: transaction.input,
      time: new Date(parseInt(transaction.timeStamp) * 1000).toLocaleString(),
      from: transaction.from,
      to: transaction.to,
      quantity: transaction.value / 1e18, // Assuming the quantity is in Wei, converting to Ether
    }));

    // res.status(200).json(extractedData);
  } catch (error) {
    console.error("Error calling Arbiscan API:", error);
    // res.status(500).json({ error: "An error occurred" });
  }
};

testing();
