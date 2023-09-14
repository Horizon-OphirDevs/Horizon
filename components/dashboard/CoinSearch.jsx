import React, { useState, useEffect } from "react";

function CoinSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openDialog = (coin) => {
    setSelectedCoin(coin);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedCoin(null);
    setDialogOpen(false);
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <div className="border flex md:w-full bg-[#1f1f1f] items-stretch rounded-lg">
        <input
          type="search"
          className="block md:w-52 min-w-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-xs font-normal leading-[1.6] text-gray-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary"
          placeholder="Search token or contract"
          value={query}
          onChange={handleInputChange}
        />
        <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700 dark:text-neutral-200 cursor-pointer" aria-label="Search">
          {/* Placeholder SVG path for search icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2"></path>
            <circle cx="10" cy="10" r="7"></circle>
          </svg>
        </span>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="dialog text-white">
          <div className="dialog-content">
            <h2 className="text-2xl font-semibold mt-4">Search Results</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>
                    {/* Render search result data here */}
                    <p>Name: {result.name}</p>
                    <p>Market Cap Rank: {result.market_cap_rank}</p>
                    <button onClick={() => openDialog(result)}>Open Details</button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}

      {/* Display the selected coin in a dialog */}
      {isDialogOpen && selectedCoin && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>{selectedCoin.name}</h2>
            <img src={selectedCoin.thumb} alt={selectedCoin.name} />
            {/* Additional details here */}
            <p>Market Cap Rank: {selectedCoin.market_cap_rank}</p>
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CoinSearch;
