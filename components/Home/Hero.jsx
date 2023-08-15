import React from "react";
import Header from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#101010] text-white min-h-screen">
      <Header />
      <div className="bg-[#101010] text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-[60px] font-poppins font-semibold leading-65   ">
            Manage Your Crypto and DeFi
          </h1>
          <h1 className="text-[60px] font-semibold font-poppins mb-4 leading-65">
            Portfolio From One Place
          </h1>
          <p className="text-lg font-poppins mb-8">
            Securely connect the portfolio you’re using to start.
          </p>
          <Link href="/app/Portfolio">
            <button className="bg-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Launch Dapp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
