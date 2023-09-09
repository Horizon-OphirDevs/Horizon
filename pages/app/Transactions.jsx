import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { BiCopy } from "react-icons/bi";

const Transactions = () => {
  const address = useAddress();
  const [transactions, setTransactions] = useState([]);
  const [transactionss, setTransactionss] = useState([]);
  const [walletAddress, setWalletAddress] = useState(address);
  const [page, setPage] = useState("1");
  const [copiedText, setCopiedText] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1); // Initialize totalPages

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `/api/transactions?walletAddress=${walletAddress}`
        );
        const data = response.data.simplifiedTransactions;
        setTransactions(data);

        // Calculate totalPages after data is fetched and when transactions change
        const calculatedTotalPages = Math.ceil(
          data.length / transactionsPerPage
        );
        setTotalPages(calculatedTotalPages);
        setCurrentPage(1); // Reset to the first page when data is fetched
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    if (walletAddress !== "") {
      fetchTransactions();
    }
  }, [walletAddress, page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/txn?walletAddress=${walletAddress}&page=${page}`
        ); // Replace with the actual route to your API
        setTransactionss(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [walletAddress, page]);

  const handleNextClick = () => {
    const nextPage = String(parseInt(page, 10) + 1);
    setPage(nextPage);
  };

  const handlePreviousClick = () => {
    const previousPage = String(parseInt(page, 10) - 1);
    setPage(previousPage);
  };
  function formatTimestamp(unixTimestamp) {
    // Convert the Unix timestamp to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a new Date object using the milliseconds
    const date = new Date(milliseconds);

    // Format the date as per your requirements, for example:
    const formattedDateTime = date.toLocaleString(); // This will use the user's locale for formatting

    return formattedDateTime;
  }

  // Calculate the range of transactions to display based on the current page
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const displayedTransactions = transactions.slice(startIndex, endIndex);
  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedText(text); // Set the text that was copied
    setTimeout(() => setCopiedText(null), 2000); // Clear copied text after 2 seconds
  };

  return (
    <div className="text-white">
      <h1
        className="p-4 bg-[#0baab5] rounded-md"
        style={{ width: "fit-content" }}
      >
        Transfers
      </h1>
      {transactions.length === 0 ? (
        <p>No transactions to show.</p>
      ) : (
        <div
          style={{ whiteSpace: "nowrap" }}
          className="overflow-x-auto w-full relative m-5"
        >
          <div className="flex justify-between mt-2">
            <button
              className="p-3 rounded-lg bg-[#0baab5]"
              onClick={handlePreviousClick}
              disabled={page === "1"}
            >
              Previous
            </button>
            <span>{page}/n</span>
            <button
              className="p-3 rounded-lg bg-[#0baab5]"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <table
            className=" text-xs rounded-lg bg-[#1c1c1c] p-3 gap-3 m-3 min-w-max whitespace-nowrap"
            style={{
              minWidth: "100%",
              lineHeight: "3rem",
              borderSpacing: "0",
            }}
          >
            <thead style={{ borderBottom: "2px solid #474747" }}>
              <tr>
                <th>TxHash</th>
                <th>Method</th>
                <th>From</th>
                <th>To</th>
                <th>TimeStamp</th>
                <th>Value(AETH)</th>
                <th>Gas(Gwei)</th>
              </tr>
            </thead>
            <tbody className="tx_table">
              {transactionss.map((transaction, index) => (
                <tr key={index} className="mx-3 px-3 tx_data">
                  <td>
                    <a
                      href={`https://arbiscan.io/tx/${transaction.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                        color: "#0baab5",
                        cursor: "pointer",
                      }}
                    >
                      {transaction.hash.length > 12
                        ? `${transaction.hash.slice(0, 12)}...`
                        : transaction.hash}
                    </a>
                  </td>
                  <td>{transaction.functionName.slice(0, 7)}..</td>
                  <td
                    onClick={() => copyToClipboard(transaction.from)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {transaction.from.slice(0, 10)}....
                      <BiCopy
                        size={17}
                        onClick={() => copyToClipboard(transaction.from)}
                      />
                    </div>
                  </td>
                  <td
                    onClick={() => copyToClipboard(transaction.to)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {transaction.to.slice(0, 10)}....
                      <BiCopy
                        size={17}
                        onClick={() => copyToClipboard(transaction.to)}
                      />
                    </div>
                  </td>
                  <td>{formatTimestamp(transaction.timeStamp)}</td>
                  <td>{transaction.value / 1000000000000000000}</td>
                  <td>{transaction.gas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {copiedText && (
        <div className="copy-notification">Copied: {copiedText}</div>
      )}

      {/* Pagination Controls */}
      {/*<div className="pagination">
        <button
          className="p-3 rounded-lg bg-[#0baab5]"
          onClick={() => loadPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="p-3 rounded-lg bg-[#0baab5]"
          onClick={() => loadPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        {currentPage === totalPages && (
          <p>No more pages to show</p>
        )}
      </div>
      */}

      <div></div>
    </div>
  );
};

export default Transactions;

Transactions.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
