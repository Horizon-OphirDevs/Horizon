import React from "react";
import Header from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

const Hero = () => {
  return (
    <div className="bg-[#101010] text-white min-h-screen ">
      <Header />
      <div className="bg-[#101010] text-white py-24 flex items-center ">
        <div className="container mx-auto text-center my-auto py-5">
          <h1 className="text-[40px] md:text-[50px] font-poppins font-semibold leading-65   ">
            Manage Your Crypto and DeFi
          </h1>
          <h1 className="text-[40px] md:text-[50px] font-semibold font-poppins mb-4 leading-65">
            Portfolio From One Place
          </h1>
          <p className="text-lg font-poppins mb-8 text-gray-300">
            Securely connect the portfolio you’re using to start.
          </p>
          <Link href="/app/Portfolio">
            <button className="bg-[#0baab5] text-white text-lg px-12 py-4 rounded-lg hover:bg-blue-700 mt-16">
              Launch Dapp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
