import React, { useState } from "react";
import axios from "axios";

function CoinSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = async () => {
    if (searchQuery.trim() !== "") {
      try {
        const response = await axios.get(`/api/search?query=${searchQuery}`);
        setSearchResults(response.data.coins); // Adjust based on API response structure
      } catch (error) {
        console.error("Error searching coins:", error);
      }
    }
  };

  return (
    <>
      <div className="relative border flex md:w-full bg-[#1f1f1f] items-stretch rounded-lg">
        <input
          type="search"
          className="relative m-0 block md:w-52 min-w-0 flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-xs font-normal leading-[1.6] text-gray-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary"
          placeholder="Search token or contract"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700 dark:text-neutral-200 cursor-pointer"
          onClick={performSearch}
          aria-label="Search"
        >
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* Display search results */}
      <div>
        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        ) : (
          /* when u finally make it work then u can remove it from the hidden class */
          <p className="hidden">No results found.</p>
        )}
      </div>
    </>
  );
}

export default CoinSearch;
