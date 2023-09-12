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

  // converting the timestamp to how long ago
  function timeAgo(unixTimestamp) {
    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;

    const currentTime = new Date().getTime();
    const timestampInMilliseconds = unixTimestamp * 1000;
    const timeDifference = currentTime - timestampInMilliseconds;

    // Log values for debugging:
    console.log("Current Time:", currentTime);
    console.log("Transaction Time:", timestampInMilliseconds);
    console.log("Difference:", timeDifference);

    if (timeDifference < millisecondsPerMinute) {
      return (
        Math.round(timeDifference / millisecondsPerSecond) + " seconds ago"
      );
    } else if (timeDifference < millisecondsPerHour) {
      return (
        Math.round(timeDifference / millisecondsPerMinute) + " minutes ago"
      );
    } else if (timeDifference < millisecondsPerDay) {
      const hours = Math.floor(timeDifference / millisecondsPerHour);
      const minutes = Math.round(
        (timeDifference - hours * millisecondsPerHour) / millisecondsPerMinute
      );
      return hours + " hours " + minutes + " minutes ago";
    } else {
      const days = Math.floor(timeDifference / millisecondsPerDay);
      const hours = Math.round(
        (timeDifference - days * millisecondsPerDay) / millisecondsPerHour
      );
      return days + " days " + hours + " hours ago";
    }
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
      {transactions.length === 0 ? (
        <p>No transactions to show.</p>
      ) : (
        <>
          <div
            // style={{ whiteSpace: "nowrap" }}
            className="bg-[#1f1f1f] md:m-2 sm:m-0  pb-5"
          >
            <div
              // the div for next and prev
              className="flex flex-row justify-between items-center w-auto px-3"
            >
              <div className="flex-1 text-left">
                {/* @DoctorInTech add the number latest transactions */}
                <p className="text-xs md:text-sm">
                  Latest {displayedTransactions.length} from a total of {transactions.length} transactions, showing {transactionsPerPage} per page
                </p>
              </div>
              <div className="flex justify-center items-center gap-3 mt-2 pt-3">
                <button
                  className="p-2 rounded-md border text-xs md:text-sm"
                  onClick={handlePreviousClick}
                  disabled={page === "1"}
                >
                  Previous
                </button>
                <span className="text-sm">{page}</span>
                <button
                  className="p-2 rounded-md  border text-xs md:text-sm"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
              <div></div>
            </div>
            <div className="overflow-x-auto p-3 m-3">
              <table
                className=" text-xs rounded-lg bg-[#1f1f1f] p-3 m-3 gap-3  min-w-max whitespace-nowrap border-collapse"
                // style={{
                //   minWidth: "100%",
                //   lineHeight: "3rem",
                //   borderSpacing: "0",
                // }}
              >
                <thead className="border-b-1 border py-3 my-3">
                  <tr>
                    <th className="py-3 my-3 ">TxHash</th>
                    <th className="py-3 my-3 ">Method</th>
                    <th className="py-3 my-3 ">TimeStamp</th>
                    <th className="py-3 my-3 ">From</th>
                    <th className="py-3 my-3 ">To</th>
                    <th className="py-3 my-3 ">Value(AETH)</th>
                    <th className="py-3 my-3 ">Gas(Gwei)</th>
                  </tr>
                </thead>

                <tbody className="tx_table ">
                  {transactionss.map((transaction, index) => {
                    console.log(
                      "Transaction Unix Timestamp:",
                      transaction.timeStamp
                    );
                    return (
                      <tr key={index} className="mx-3 px-3 tx_data">
                        <td>
                          <a
                            href={`https://arbiscan.io/tx/${transaction.hash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#0baab5",
                              cursor: "pointer",
                            }}
                          >
                            {transaction.hash.length > 12
                              ? `${transaction.hash.slice(0, 12)}...`
                              : transaction.hash}
                          </a>
                        </td>
                        <td>
                          <div className="text-xs p-2 border rounded-lg m-2 text-center bg-[#1c1c1c]">
                            {transaction.functionName.slice(0, 7)}..
                          </div>
                        </td>
                        <td>{timeAgo(transaction.timeStamp)}</td>
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

                        <td>
                          {(transaction.value / 1000000000000000000).toFixed(5)}
                        </td>
                        <td>{transaction.gas}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
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
