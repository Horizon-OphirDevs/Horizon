import axios from "axios";
import { useState, useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import BigNumber from "bignumber.js";

import { BiCopy } from "react-icons/bi";

const Transactions = () => {
  const address = useAddress(); // Assuming useAddress() is defined somewhere
  const [transactions, setTransactions] = useState([]);
  const [walletAddress, setWalletAddress] = useState(address);
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`/api/transactions?walletAddress=${walletAddress}`);
        const data = response.data.simplifiedTransactions; // Assuming the API returns simplifiedTransactions

        setTransactions(data);
      } catch (error) {
        console.error('Fetch Error:', error);
      }
    };

    if (walletAddress !== '') {
      fetchTransactions();
    }
  }, [walletAddress]);

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

  // to set the time into days and hours ago
  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const differenceInMilliseconds = now - past;

    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;

    const millisecondsPerDay =
      millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay;
    const millisecondsPerHour =
      millisecondsPerSecond * secondsPerMinute * minutesPerHour;

    const days = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    const remainingMilliseconds = differenceInMilliseconds % millisecondsPerDay;
    const hours = Math.floor(remainingMilliseconds / millisecondsPerHour);

    return `${days} days and ${hours} hours ago`;
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
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          {" "}
          {/* Scrollable container */}
          <table
            className="table  text-xs rounded-lg bg-[#1c1c1c] p-3 gap-3 m-3 overflow-x-auto"
            style={{ minWidth: "100%", lineHeight: "3rem", borderSpacing: "0" }}
          >
            <thead style={{ borderBottom: "2px solid #474747" }}>
              <tr>
                <th>Transaction Hash</th>
                <th>Method</th>
                <th>Time</th>
                <th>From</th>
                <th>To</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="tx_table">
              {transactions.map((tx, index) => {
                return (
                  <tr key={index} className="mx-3 px-3 tx_data">
                    <td
                      onClick={() => copyToClipboard(tx.txnHash)}
                      style={{ cursor: "pointer" }}
                    >
                      {tx.txnHash.length > 12
                        ? `${tx.txnHash.slice(0, 12)}...`
                        : tx.txnHash}
                    </td>
                    <td>
                      {tx.method}
                    </td>
                    <td>{timeAgo(tx.time)}</td>

                    {/* transaction from  */}
                    <td
                      onClick={() => copyToClipboard(tx.from)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {tx.from.slice(0, 10)}....
                        <BiCopy
                          size={17}
                          onClick={() => copyToClipboard(tx.from)}
                        />
                      </div>
                    </td>
                    {/* transaction to */}
                    <td
                      onClick={() => copyToClipboard(tx.to)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {tx.to.slice(0, 10)}...
                        <BiCopy
                          size={17}
                          onClick={() => copyToClipboard(tx.from)}
                        />
                      </div>
                    </td>
                    <td>
                      {tx.quantity}Eth
                    </td>
                    <td>{tx.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {copiedText && (
        <div className="copy-notification">Copied: {copiedText}</div>
      )}
      {/* Rest of your component rendering and logic */}
    </div>
  );
};

export default Transactions;

Transactions.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
