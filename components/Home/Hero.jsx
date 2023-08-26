import React from "react";
import { useState } from "react";
import Header from "./Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

// react icons
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiGoogleDrive } from "react-icons/di";

const Hero = () => {
  return (
    <>
      <Head>
        <title>Portfolio Tracker for the Arbitrum Blockchain</title>
        <meta
          name="Arbitrum Portfolio Tracker"
          content="Portfolio Tracker for the Arbitrum Blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/horizons.ico" />
      </Head>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2 ">
            <Image
              src="/HorizonWithLogo.png"
              alt="horizon Logo"
              width={150}
              height={150}
            />
          </div>

          {/* menu items  */}
          <div className="flex justify-end md:hidden ">
            <div className="block border md:hidden p-3 px-6 pt-2 text-white bg-[#0baab5] rounded-full baseline">
              <Link href="/app/Portfolio">Launch Dapp</Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-300 items-center ">
            <a href="#" className="hover:bg-[#0baab5]">
              Home
            </a>
            <a href="#" className="hover:bg-[#0baab5]">
              About
            </a>
            <a href="#" className="hover:bg-[#0baab5]">
              Faqs
            </a>
            <a href="#" className="hover:bg-[#0baab5]">
              Docs
            </a>
            <div className="hidden border md:block p-3 px-6 pt-2 text-white bg-[#0baab5] rounded-full baseline ">
              <a href="#" className="">
                <AiFillGithub className="text-xl text-white" />
              </a>
            </div>

            {/* hamburger menu */}
          </div>
        </div>
      </nav>

      {/* Hero Section  */}
      <section className="">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
          {/* left item  */}
          <div className="flex flex-col md:mb-32 mb-5 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-300">
              An Intuitive token wallet tracker
            </h1>
            <p className="max-w-sm text-center md:text-left text-gray-400">
              Effortlessly oversee your DeFi and NFT portfolios spanning various
              blockchain networks, granting you a panoramic view of your tokens
              and entire asset collection through the innovative lens of
              Horizon.
            </p>
            <div className="flex justify-center md:justify-center ">
              <div className="hidden border md:block p-3 px-6 pt-2 text-white bg-[#0baab5] rounded-full baseline">
                <Link href="/app/Portfolio">Launch Dapp</Link>
              </div>
            </div>
          </div>

          {/* image  */}
          <div className="md:w-1/2">
            <Image
              src="/blockchain3.png"
              alt="horizon Logo"
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>

      {/* features section  */}
      <section className="">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto md:mt-2 space-y-0 md:space-y-0 mb-32 ">
          <div className="md:w-1/2">
            <Image
              src="/blockchain4.png"
              alt="horizon Logo"
              width={450}
              height={450}
            />
          </div>
          {/* left item  */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mx-3">
            <h1 className="max-w-md text-3xl text-center md:text-4xl md:text-left text-gray-300">
              About{" "}
              <span className="text-[#0baab5] font-semibold">Horizon</span>
            </h1>
            <p className="max-w-sm text-center md:text-left text-gray-400">
              Horizon stands as a user-friendly Web3 Portfolio & Token Tracker
              platform across various Chains, simplifying the management and
              analysis of your cryptocurrency portfolio. Harnessing the
              advantages of layer 2 technology, Horizon offers instantaneous
              analytics, transparent transaction records, and effortless
              compatibility with Ethereum wallets.
            </p>
          </div>

          {/* image  */}
        </div>
      </section>

      {/* core features section  */}
      <section className="features_section" id="features">
        {/* flex container */}
        <div className="container flex flex-col px-4 mx-auto my-10 space-y-12 md:space-y-0 md:flex-row mx-3">
          <div className="flex flex-col space-y-2 md:w-1/2">
            <h2 className="max-w-md text-3xl font-bold text-center text-gray-300 md:text-left">
              Core Features of{" "}
              <span className="text-[#0baab5] font-semibold">Horizon</span>
            </h2>
            <p className="max-w-sm text-center text-gray-400 p-5">
              Horizon streamlines portfolio management within the ever-evolving
              realm of DeFi and blockchain technology. It presents a
              comprehensive Web3 Portfolio & Token Tracker across various
              chains, providing users with a seamless and efficient way to
              monitor and oversee their digital assets.
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* list item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-l-full bg-[#0baab521] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#0baab5]">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Portfolio Management
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Portfolio Management
                </h3>
                <p className="text-gray-400">
                  Connect your Ethereum wallet to track assets across various
                  DeFi protocols and tokens on the various chains.
                </p>
              </div>
            </div>

            {/* list item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-l-full bg-[#0baab521] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#0baab5]">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Real-time Analytics
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Real-time Analytics
                </h3>
                <p className="text-gray-400">
                  Get live updates on portfolio value, ROI, and asset allocation
                  for informed decision-making
                </p>
              </div>
            </div>

            {/* list item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-l-full bg-[#0baab521] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#0baab5]">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Transaction History
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Transaction History
                </h3>
                <p className="text-gray-400">
                  Easily review and verify all your transactions for
                  transparency and security.
                </p>
              </div>
            </div>

            {/* list item 4 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row  ">
              {/* heading */}
              <div className="rounded-l-full bg-[#0baab521] md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-[#0baab5]">
                    04
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Different Chain Integration
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Different Chain Integration
                </h3>
                <p className="text-gray-400">
                  Enjoy fast and cost-effective transactions, thanks to layer 2
                  solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section  */}
      <footer>
        <div className="container flex flex-col-reverse justify-between px-6 pt-10 pb-0 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo and social links */}
          <div className="flex flex-col-reverse  items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-center">
            <div className="mx-auto my-6 text-center text-white text-sm md:hidden ">
              Copyright &copy; 2023, All right reserved.
            </div>
            <div className="md:px-32">
              <Image
                src="/HorizonWithLogo.png"
                alt="horizon Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="flex justify-center space-x-4 ">
              <a href="#" className="">
                <AiFillTwitterCircle className="text-xl text-[#0baab5]" />
              </a>
              <a href="#" className="">
                <AiFillGithub className="text-xl text-[#0baab5]" />
              </a>
              <a href="#" className="">
                <DiGoogleDrive className="text-xl text-[#0baab5]" />
              </a>
            </div>
          </div>

          <div className="flex md:hidden justify-around space-x-32 ">
            <div className="flex flex-col space-y-3 ">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Faqs
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
