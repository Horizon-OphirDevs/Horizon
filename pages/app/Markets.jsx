import React, { useState, useEffect } from "react";

const Markets = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/coin-data");
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-gray-300">
        <h1>Token Tracker</h1>
        <p></p>
      </div>
      <div className="rounded-lg shadow-xl bg-[#1f1f1f] col-span-2">
        <div className="p-3 m-2">
          <div className="overflow-x-scroll flex justify-center align rounded">
            <table className="min-w-full bgr text-white border-lg border-gray-600 rounded">
              <thead>
                <tr className="p-5">
                  <th>Token</th>
                  <th>Price</th>
                  <th>Change (%)</th>
                  <th>Volume 24h</th>
                  <th>Market Cap</th>
                  <th>Holders</th>
                </tr>
              </thead>
              <tbody>
                {data.map((token) => (
                  <tr key={token.id}>
                    <td>{token.name}</td>
                    <td>{token.current_price}</td>
                    <td>{token.price_change_percentage}</td>
                    <td>{token.total_volume}</td>
                    <td>{token.market_cap}</td>
                    <td>{token.total_supply}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
