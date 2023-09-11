import React from "react";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

// rearrange the boxes when u render

const Explore = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 m-3 grid-flow-row-dense explore_items">
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className="p-5 md:p-5 rounded-lg text-center items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/arb_uniswap.jpeg"
                alt="uniswap Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> Uniswap V3</h1>
            <p className="text-gray-500 text-xs ">
              Non custodial wallet with a multi-sig accounts option and Ledger
              support
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
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
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/arb_logo2.png"
                alt="arbiscan Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> Arbitrum Scan</h1>
            <p className="text-gray-500 text-xs ">
              Search and explore the immutable records of the Arbitrum
              blockchain
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
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
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/arb_bridge.webp"
                alt="uniswap Logo"
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> Arbitrum bridge</h1>
            <p className="text-gray-500 text-xs ">
              Explore the world of interchain transactions.
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
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
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/gmx-logo.png"
                alt="GMX Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> GMX Perpetual</h1>
            <p className="text-gray-500 text-xs ">
              "Trade BTC, ETH, AVAX, and other top cryptocurrencies with up to
              50x leverage on a Decentralized Perpetual Exchange directly from
              your wallet."
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
              <Link href="https://discord.com/invite/ymN38YefH9">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://gmx.io/#/">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/GMX_IO">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/radiant.jpeg"
                alt="radiant Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> RADIANT</h1>
            <p className="text-gray-500 text-xs ">
              Earn Interest & Borrow Assets Cross-Chain, Seamlessly
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
              <Link href="https://discord.gg/radiantcapital">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://radiant.capital/#/markets">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/RDNTCapital">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/aave-logo.png"
                alt="aave Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300">
              {" "}
              AAVE LIQUIDITY PROTOCOL
            </h1>
            <p className="text-gray-500 text-xs ">
              Earn interest, borrow assets, and build applications
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
              <Link href="https://discord.gg/CvKUrqM">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://aave.com/">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/aaveaave">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/balancer.png"
                alt="balancer Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300">
              {" "}
              Balancer Defi Protocol
            </h1>
            <p className="text-gray-500 text-xs ">
              Balancer is a protocol for programmable liquidity.
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
              <Link href="https://discord.balancer.fi/">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://balancer.fi/">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/Balancer">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/6876038.webp"
                alt="stargate Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> Stargate</h1>
            <p className="text-gray-500 text-xs ">
              Stargate enables cross-chain asset transfers and provides instant
              access to Omnichain DeFi's unified liquidity pools.
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
              <Link href="https://stargate.finance/discord">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://stargate.finance/">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/StargateFinance">
                <FaTwitter className="text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center rounded-lg shadow-xl min-h-[15rem] md:min-h-[17rem] bg-[#1f1f1f]">
          <div className=" p-5 md:p-8 rounded-lg text-center">
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-xl "
                src="/camelot.jpeg"
                alt="camelot Logo"
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-md p-3 my-2 text-gray-300"> Camelot</h1>
            <p className="text-gray-500 text-xs ">
              Camelot is an innovative and highly flexible DEX built to support
              the Arbitrum ecosystem. Community driven and capital efficient.
            </p>
            <div className="p-2 flex m-2 justify-center gap-5">
              <Link href="https://discord.com/invite/r9V7rry3nz">
                <BsDiscord className="text-purple-600" />
              </Link>
              <Link href="https://camelot.exchange/">
                <FaRegCompass className="text-gray-400 " />
              </Link>
              <Link href="https://twitter.com/camelotdex">
                <FaTwitter className="text-blue-400" />
              </Link>
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
