import React from "react";
import { useState, useEffect } from "react";

// I commennted these things out to avoid breaking the code while working on the UI

const Markets = ({ initialData }) => {
  const numberOfTokens = 1234; //this part will be used to display no. of tokens

  // const [data, setData] = useState(initialData);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ethereum",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$123,456,789",
      marketCap: "$123,456",
      holders: "123,456",
    },
    {
      id: 2,
      name: "Arbitrum",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$123,456,789",
      marketCap: "$123,456",
      holders: "123,456",
    },
    {
      id: 3,
      name: "WINR",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$123,456,789",
      marketCap: "$123,456",
      holders: "123,456",
    },
    {
      id: 4,
      name: "SHIB",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$123,456,789",
      marketCap: "$123,456",
      holders: "123,456",
    },
    {
      id: 5,
      name: "HODL",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$123",
      marketCap: "$123,456",
      holders: "123,456",
    },
    {
      id: 6,
      name: "DOGE",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$356,456",
      marketCap: "$123,456",
      holders: "123,456",
    },
    {
      id: 7,
      name: "PEPE INU",
      price: "$3,456.78",
      change: "+1.23%",
      volume24h: "$187,789",
      marketCap: "$12,456",
      holders: "123,456",
    },
  ]);

  // Fetch new data every minute (or other desired interval)
  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const newData = await fetchData();
  //     setData(newData);
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="text-gray-300">
        <h1>Token Tracker</h1>
        <p> A total of {numberOfTokens} Token contracts found.</p>
      </div>
      <div className="rounded-lg shadow-xl  bg-[#1f1f1f] col-span-2">
        <div className="p-3 m-2">
          <div className="overflow-x-scroll flex justify-center align rounded">
            <table className="min-w-full bgr text-white border-lg border-gray-600 rounded">
              <thead>
                <tr className="p-5">
                  <th>Token</th>
                  <th>Price</th>
                  <th>Change(%)</th>
                  <th>Volume 24h</th>
                  <th>Market Cap</th>
                  <th>Holders</th>
                </tr>
              </thead>
              <tbody>
                {data.map((token) => (
                  <tr key={token.id}>
                    <td>{token.name}</td>
                    <td>{token.price}</td>
                    <td>{token.change}</td>
                    <td>{token.volume24h}</td>
                    <td>{token.marketCap}</td>
                    <td>{token.holders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen bg-[#1f1f1f] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <table className="min-w-full divide-y text-gray-300 bgr border-lg border-gray-600 rounded">
            <thead className="w-3 p-5">
              <tr className="p-5">
                <th>Token</th>
                <th>Price</th>
                <th>Change(%)</th>
                <th>Volume 24h</th>
                <th>Market Cap</th>
                <th>Holders</th>
              </tr>
            </thead>
            <tbody>
              {data.map((token) => (
                <tr key={token.id}>
                  <td>{token.name}</td>
                  <td>{token.price}</td>
                  <td>{token.change}</td>
                  <td>{token.volume24h}</td>
                  <td>{token.marketCap}</td>
                  <td>{token.holders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Markets;

// export async function getServerSideProps() {
//   const initialData = await fetchData();
//   return { props: { initialData } };
// }

// this is the function to render live prices from the API
// async function fetchData() {
//   const res = await fetch("ARBITRUM_API_ENDPOINT");
//   const data = await res.json();
//   return data;
// }

Markets.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
