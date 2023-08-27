// pages/api/coin-data.js

import axios from "axios";

let cachedData = null;
let lastFetch = null;

export default async function handler(req, res) {
  if (cachedData && Date.now() - lastFetch < 60000) {
    return res.status(200).json(cachedData);
  }

  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 20, // Updated to 20 coins per page
          page: 1,
          sparkline: true,
          price_change_percentage: "24h",
          locale: "en",
        },
      }
    );

    const coinsData = response.data.map((coin) => ({
      name: coin.name,
      current_price: coin.current_price,
      total_volume: coin.total_volume,
      market_cap: coin.market_cap,
      price_change_percentage: coin.price_change_percentage_24h,
      image: coin.image,
      sparkline: coin.sparkline_in_7d.price,
      total_supply: coin.total_supply,
    }));

    cachedData = coinsData;
    lastFetch = Date.now();

    res.status(200).json(coinsData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
