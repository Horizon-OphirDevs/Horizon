import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAddress } from "@thirdweb-dev/react";

const Transactions = () => {
  const address = useAddress(); // Assuming useAddress() is defined somewhere
  const [transactions, setTransactions] = useState([]);
  const [walletAddress, setWalletAddress] = useState(address)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`/api/transactions/${walletAddress}`);
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

  return (
    <div>
      <h1>Transaction History</h1>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            <p>Transaction Hash: {tx.txnHash}</p>
            <p>Method: {tx.method}</p>
            <p>Time: {tx.time.toString()}</p>
            <p>To: {tx.to}</p>
            <p>From: {tx.from}</p>
            <p>Quantity: {tx.quantity}</p>
            <hr />
          </li>
        ))}
      </ul>
      {/* Rest of your component rendering and logic */}
    </div>
  );
};

export default Transactions;


Transactions.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
