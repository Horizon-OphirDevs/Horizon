import axios from "axios";
import { useState, useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";

const YourComponent = () => {
  const address = useAddress(); // Assuming useAddress() is defined somewhere
  const [transactions, setTransactions] = useState([]);
  const [walletAddress, setWalletAddress] = useState(address);
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `/api/transactions?walletAddress=${walletAddress}`
        );
        const data = response.data;

        setTransactions(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    if (walletAddress !== "") {
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

  return (
    <div className="text-white">
      <h1>Transaction History</h1>
      {transactions.length === 0 ? (
        <p>No transactions to show.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Transaction Hash</th>
              <th>Method</th>
              <th>Time</th>
              <th>To</th>
              <th>From</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td
                  onClick={() => copyToClipboard(tx.txnHash)}
                  style={{ cursor: "pointer" }}
                >
                  {tx.txnHash.length > 12 
                    ? `${tx.txnHash.slice(0, 12)}...`
                    : tx.txnHash}
                </td>
                <td>
                  {tx.method.length > 10 
                    ? `${tx.method.slice(0, 10)}...`
                    : tx.method}
                </td>
                <td>{tx.time.toString()}</td>
                <td
                  onClick={() => copyToClipboard(tx.to)}
                  style={{ cursor: "pointer" }}
                >
                  {tx.to}
                </td>
                <td
                  onClick={() => copyToClipboard(tx.from)}
                  style={{ cursor: "pointer" }}
                >
                  {tx.from}
                </td>
                <td>{tx.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {copiedText && (
        <div className="copy-notification">
          Copied: {copiedText}
        </div>
      )}
      {/* Rest of your component rendering and logic */}
    </div>
  );
};

export default YourComponent;

YourComponent.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
