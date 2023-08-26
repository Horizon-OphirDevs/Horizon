import React,{useEffect,useState} from "react";
import axios from 'axios';
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import { BsThreeDots } from "react-icons/bs";

const Portfolio = () => {
  const address =  useAddress();
  const [balance, setBalance] = useState("0");
  const [walletAddress, setWalletAddress] = useState(address)

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`/api/balance?walletAddress=${walletAddress}`);
        const data = response.data;

        if (data.balance) {
          setBalance(data.balance);
        } else {
          console.error("API Error:", data.error);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    if (walletAddress !== "") {
      fetchBalance();
    }
  }, [walletAddress]); 

  return (
    <div className="grid grid-cols-1 gap-8 m-3 items-center px-6 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-xl long md:min-h-[17rem] bg-[#1f1f1f] items-center">
          <div className=" justify-between p-3 hidden">
            <p className="text-gray-300">Token Allocation</p>
            <span className="text-gray-600 rounded-2xl border p-2">
              <BsThreeDots />
            </span>
          </div>
          <div className=" port_img">
            <Image
              className=" rounded-xl "
              src="/Asset.jpg"
              alt="Horizon Logo"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="rounded-lg shadow-xl long md:min-h-[17rem] bg-[#1f1f1f] flex justify-center items-center">
          {/* this will be substitute for whats meant to be there */}
          <div className=" justify-between p-0 ">
            <Image
              className=" rounded-xl "
              src="/frame.jpg"
              alt="frame Logo"
              width={600}
              height={600}
            />
            <div className="text-white">
            {balance}
            {address}
            </div> 
          </div>
          <div className="hidden grid-cols-2 gap-2 m-5 items-center justify-center ">
            <div className="md:min-h-[13rem] h-36 border rounded"></div>
            <div className="md:min-h-[13rem] h-36 border rounded"></div>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-xl  bg-[#1f1f1f] md:col-span-2">
        <div className="p-3 m-2">
          <div className="overflow-x-scroll flex justify-center align rounded">
            <table className="min-w-full bgr text-white border-lg border-gray-600 rounded">
              <thead>
                <tr>
                  {[
                    "COIN",
                    "PRICE",
                    "HOLDINGS",
                    "CHART",
                    "24hr",
                    "24hr volume",
                    "Market cap",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="py-2 px-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    Ethereum
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    Arbitrum
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    WINR
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    VELA
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

Portfolio.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
