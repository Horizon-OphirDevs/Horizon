import React from "react";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

// rearrange the boxes when u render

const Explore = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 m-3 grid-flow-row-dense">
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className="p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <Link href="https://discord.gg/FCfyBSbCU5">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://app.uniswap.org/#/?chain=arbitrum">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/uniswap">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Arbitrum Scan</h1>
            <p className="text-gray-500 text-xs ">
              Search and explore the immutable records of the Arbitrum
              blockchain
            </p>
            <div className="p-2 flex m-2 justify-between">
              <Link href="https://discord.gg/arbitrum">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://arbiscan.io/">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/arbitrum">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Arbitrum bridge</h1>
            <p className="text-gray-500 text-xs ">
              Explore the world of interchain transactions.
            </p>
            <div className="p-2 flex m-2 justify-between">
              <Link href="https://discord.com/invite/ZpZuw7p">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://bridge.arbitrum.io/?l2ChainId=42161">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/OffchainLabs">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> WEB3</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <BsDiscord className="text-purple-600" />
              <FaRegCompass className="text-gray-400 " />
              <FaTwitter className="text-blue-400" />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <BsDiscord className="text-purple-600" />
              <FaRegCompass className="text-gray-400 " />
              <FaTwitter className="text-blue-400" />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <BsDiscord className="text-purple-600" />
              <FaRegCompass className="text-gray-400 " />
              <FaTwitter className="text-blue-400" />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <BsDiscord className="text-purple-600" />
              <FaRegCompass className="text-gray-400 " />
              <FaTwitter className="text-blue-400" />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <BsDiscord className="text-purple-600" />
              <FaRegCompass className="text-gray-400 " />
              <FaTwitter className="text-blue-400" />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-between">
              <BsDiscord className="text-purple-600" />
              <FaRegCompass className="text-gray-400 " />
              <FaTwitter className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

Explore.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
