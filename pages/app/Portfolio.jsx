import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import BigNumber from "bignumber.js";
import { useAddress } from "@thirdweb-dev/react";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidWallet } from "react-icons/bi";
import { BsEyeSlash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Portfolio = () => {
  const address = useAddress();
  const [balance, setBalance] = useState("0");
  const [walletAddress, setWalletAddress] = useState(address);
  const [portfolioData, setPortfolioData] = useState([]);

  let cutAddress = "";
  if (address) {
    cutAddress = address.slice(0, 6) + "..." + address.slice(-4);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/dashboard?walletAddress=${walletAddress}`);
        const data = response.data;

        if (data.error) {
          console.error("API Error:", data.error);
        } else {
          setPortfolioData(data); // Update the portfolioData state
          setBalance(data.balance);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    if (walletAddress !== "") {
      fetchData();
    }
  }, [walletAddress]);

  const cutBalance = new BigNumber(balance)
    .dividedBy(new BigNumber(10).pow(18))
    .toFixed(6);

  return (
    <div className="grid grid-cols-1 gap-8 m-3 items-center px-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* before connecting box */}
        {address ? (
          <>
            {/* first div box */}
            <div className="md:col-span-3 rounded-lg shadow-xl long md:min-h-[17rem] bg-[#1f1f1f] items-center grid-row-3">
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

            {/* second div box */}
            <div className="md:col-span-4 rounded-lg shadow-xl grid-row-4 long md:min-h-[17rem] bg-[#1f1f1f] flex justify-center flex-col items-center">
              <div className="flex flex-row p-3 gap-4 items-center justify-center">
                {/* first inner box */}
                <div className="rounded ">
                  {/* image icon`` */}
                  <div className="text-gray-300 p-1 rounded flex flex-col items-center justify-center">
                    <Image
                      className=" rounded-xl "
                      src="/mask.png"
                      alt="Horizon Logo"
                      width={150}
                      height={150}
                    />
                    <span className="bg-[#343434] p-2 rounded my-3 w-full text-center text-md flex gap-2 items-center">
                      {cutAddress}
                      <IoIosArrowDown size={16} />
                    </span>
                  </div>
                </div>
                {/* second inner box */}
                <div className="text-white flex items-center flex-col">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="p-1 rounded-lg  bg-[#1497337f] wallet-icon ">
                      <BiSolidWallet size={22} />
                    </div>
                    <h2 className="text-gray-400 text-sm md:text-md font-bold">
                      {" "}
                      Net Worth
                    </h2>
                    {/* eye ball symbol */}
                    <BsEyeSlash size={17} />
                  </div>
                  <h2 className=" text-xl md:text-2xl">${cutBalance}</h2>
                  <div className="text-xs text-gray-500">
                    <p>Monthly Profit</p>
                    {/* percentage increase */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="md:col-span-7 rounded-lg shadow-xl long md:min-h-[17rem] bg-[#1f1f1f] items-center flex justify-center">
              <h2 className="items-center text-gray-300 font-semibold text-2xl">
                Connect your wallet to view portfolio !
              </h2>
            </div>
          </>
        )}
      </div>

      {/* ======== Holdings sections ========== */}
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
                    "AMOUNT",
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
                {portfolioData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-3 text-left text-xs leading-4 font-medium text-gray-500">
                      {item.assetName}
                    </td>
                    <td className="py-2 px-3 text-left text-xs leading-4 font-medium text-gray-500">
                      ${item.price}
                    </td>
                    <td className="py-2 px-3 text-left text-xs leading-4 font-medium text-gray-500">
                      {item.quantity}
                    </td>
                    <td className="py-2 px-3 text-left text-xs leading-4 font-medium text-gray-500">
                      ${item.value}
                    </td>
                    {/* Add columns for "24hr," "24hr volume," and "Market cap" here */}
                  </tr>
                ))}
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
