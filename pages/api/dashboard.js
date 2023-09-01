const sdk = require('api')('@chainbase/v1.0#1kyz5d4liym8zdw');

export default async (req, res) => {
  try {
    const { walletAddress } = req.query; // Extract address from query parameter

    if (!walletAddress) {
      res.status(400).json({ error: "Wallet address is required" });
      return;
    }
    
    const response = await sdk.getAccountTokens({
      chain_id: '42161',
      address: walletAddress, // Remove the curly braces around walletAddress
      limit: '20',
      page: '1',
      'x-api-key': '2Ubr7CKu26athkPkImSWHDiG1TL'
    });

    const extractedData = response.data.data.map(token => { // Access the nested "data" array
      return {
        balance: token.balance,
        name: token.name,
        logo: token.logos.length > 0 ? token.logos[0].url : null,
        current_usd_price: token.current_usd_price,
        decimals: token.decimals
      };
    });

    console.log(extractedData);
    res.status(200).json(extractedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
