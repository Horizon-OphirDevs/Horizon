import React, { useState, useEffect } from "react";
import Image from "next/image";

const CoinsPerPage = 20;

const Markets = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add searchQuery state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/coins");
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, []);

  const startIndex = (currentPage - 1) * CoinsPerPage;
  const endIndex = startIndex + CoinsPerPage;

  // Step 3: Filter the data based on the search query
  const filteredData = data.filter((token) =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="markets_home md:h-screen">
      <div className="rounded-lg shadow-xl bg-[#1f1f1f] overflow-x-auto text-xs">
        <div className="p-3 m-2">
          {/* Step 2: Add an input field for searching */}
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="min-w-full gap-4 whitespace-nowrap bgr text-white border-lg border-gray-600 rounded overflow-x-auto h-full">
              <thead className="border-b border-gray-600 sticky top-0">
                <tr className="py-5">
                  <th className="p-2 border bg-[#1f1f1f] px-5 text-left text-xs leading-4">
                    Token
                  </th>
                  <th className="px-5 text-left text-xs leading-4">Price</th>
                  <th className="px-5 text-left text-xs leading-4">
                    Change (%)
                  </th>
                  <th className="px-5 text-left text-xs leading-4">
                    Volume 24h
                  </th>
                  <th className="px-5 text-left text-xs leading-4">
                    Market Cap
                  </th>
                  <th className="px-5 text-left text-xs leading-4">
                    Total Supply
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {Array.isArray(filteredData) && // Step 4: Use filteredData
                  filteredData.slice(startIndex, endIndex).map((token) => (
                    <tr key={token.id}>
                      <td className="flex gap-2 items-center p-3 px-3  bg-[#1f1f1f] ">
                        <div className="p-2 rounded-lg bg-[#39393983]">
                          <Image
                            src={token.image}
                            width={20}
                            height={20}
                            alt={token.name}
                          />
                        </div>
                        {token.name}
                      </td>
                      <td className="md:p-3 px-3">${token.current_price}</td>
                      <td
                        className={
                          token.price_change_percentage
                            ? token.price_change_percentage
                                .toString()
                                .startsWith("-")
                              ? "text-red-500 md:p-3 px-3"
                              : "text-green-700 md:p-3 px-3"
                            : "md:p-3"
                        }
                      >
                        {parseFloat(token.price_change_percentage).toFixed(2)}%
                      </td>
                      <td className="md:p-3 px-3">
                        $
                        {token.total_volume
                          ? token.total_volume.toLocaleString()
                          : "N/A"}
                      </td>
                      <td className="md:p-3 px-3">
                        $
                        {token.market_cap
                          ? token.market_cap.toLocaleString()
                          : "N/A"}
                      </td>
                      <td className="md:p-3 px-3">
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
            disabled={endIndex >= filteredData.length}
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
