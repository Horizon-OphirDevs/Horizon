import React, { useState, useEffect } from "react";
import Image from "next/image";

const CoinsPerPage = 20; // Define the number of coins per page

const Markets = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage stat

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/coins");
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Reset data to an empty array on error
      }
    };

    fetchData(); // Initial data fetch

    const interval = setInterval(fetchData, 60000); // Fetch data every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const startIndex = (currentPage - 1) * CoinsPerPage;
  const endIndex = startIndex + CoinsPerPage;

  return (
    <div className="markets_home h-screen">
      <div className="text-gray-300">
        <h1>Token Tracker</h1>
        <p></p>
      </div>
      <div className="rounded-lg shadow-xl bg-[#1f1f1f] col-span-2 text-xs markets_table ">
        <div className="p-3 m-2 overflow-x-auto flex justify-center space-x-2 ">
          <div className=" flex rounded overflow-x-auto ">
            <table className="min-w-full bgr text-white border-lg border-gray-600 rounded overflow-x-auto h-full">
              <thead className="border-b border-gray-600 sticky top-0">
                <tr className="py-5">
                  <th className="sticky left-0 bg-[#1f1f1f] z-10">Token</th>
                  <th>Price</th>
                  <th>Change (%)</th>
                  <th>Volume 24h</th>
                  <th>Market Cap</th>
                  <th>Total Supply</th>
                </tr>
              </thead>
              <tbody className="">
                {Array.isArray(data) &&
                  data.slice(startIndex, endIndex).map((token) => (
                    <tr key={token.id}>
                      <td className="flex gap-2 items-center p-3 sticky left-0 z-10">
                        <div className="p-2 rounded-lg bg-[#39393983] ">
                          <Image
                            src={token.image}
                            width={20}
                            height={20}
                            alt={token.name}
                          />
                        </div>
                        {token.name}
                      </td>
                      <td className="md:p-3">${token.current_price}</td>
                      <td
                        className={
                          token.price_change_percentage
                            ? token.price_change_percentage
                                .toString()
                                .startsWith("-")
                              ? "text-red-500 md:p-3"
                              : "text-green-700 md:p-3"
                            : "md:p-3"
                        }
                      >
                        {parseFloat(token.price_change_percentage).toFixed(2)}%
                      </td>

                      <td className="md:p-3">
                        $
                        {token.total_volume
                          ? token.total_volume.toLocaleString()
                          : "N/A"}
                      </td>
                      <td className="md:p-3">
                        $
                        {token.market_cap
                          ? token.market_cap.toLocaleString()
                          : "N/A"}
                      </td>
                      <td className="md:p-3">
                        {token.total_supply
                          ? token.total_supply.toLocaleString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full flex p-3 m-auto items-center gap-3 justify-center">
          <button
            className="p-3 rounded-lg bg-[#0baab5]"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="p-3 rounded-lg bg-[#0baab5]"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= data.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Markets;

Markets.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
