import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//Bernard.O Using Thirdweb SDK for Connecting Wallet {https://portal.thirdweb.com/react} <--Check it Out
import { ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
//import CoinSearch from "../dashboard/CoinSearch";
// React Icon

import { IoNotificationsSharp } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdCandlestickChart } from "react-icons/md";
import { RiNftLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";

// Redux
// import { useDispatch } from "react-redux";
// import { TOGGLE_SIDEBAR } from "../../redux/actions/action";

const Topbar = ({ activeSection }) => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [activeSectionMobile, setActiveSection] = useState("Dashboard");
  //Bernard.O Making use Of the react hook to disconnect the Wallet
  const disconnect = useDisconnect();

  const addressc = useAddress();
  console.log(addressc);

  // FOR SEARCH ALERT
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  // Icon Style
  const Iconstyle = {
    fontSize: "1.2em",
    cursor: "pointer",
    color: "white",
  };

  return (
    <header>
      <nav className="flex justify-between items-center my-3 border-b border-gray-400">
        <div className="hidden md:block text-white">{activeSection}</div>
        <div className="pb-3 md:hidden">
          <Image
            src="/HorizonWithLogo.png"
            alt="Horizon Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex border rounded-md mb-2 p-1 text-sm md:hidden lg:hidden text-gray-400">
          {activeSectionMobile}
        </div>
        <div className="text-white text-xl md:hidden" id="open">
          <GiHamburgerMenu onClick={toggleNavbar} />
        </div>

        <div className=" gap-2 px-2 hidden md:block w-[50%] items-center  ">
          {/* Search Bar */}
          {/*<CoinSearch />*/}
        </div>

        {/*Check global.css for the current update on the connect wallet styling */}
        <div className="connect_button md:flex hidden">
          <ul className="flex items-center gap-[3vw]  ">
            <li>
              <IoNotificationsSharp style={Iconstyle} />
            </li>
          </ul>
          <ConnectWallet btnTitle="+ Connect Wallet" />
        </div>
      </nav>

      {/* ------------------  sidebar menu  --------------------  */}
      <div
        className={`shadow md:hidden  ${
          navbarOpen ? "hidden" : "block transition-all duration-500 "
        }`}
      >
        <div
          className="dashboard_sideBar md:hidden duration-500"
          id="topSideBar"
        >
          {/*Bernard.O I Exported the logo from your figma design and replaced it*/}
          <div className="">
            <div className=" top_logo">
              <Image
                src="/HorizonWithLogo.png"
                alt="Horizon Logo"
                width={120}
                height={120}
              />

              <div className="text-white" id="close">
                <TfiClose onClick={toggleNavbar} style={{ color: "white" }} />
              </div>
            </div>
          </div>

          <div className="dashboard_sidebar_navigation ">
            <ul className="text-gray-200">
              <div className="sidebar_top_part">
                <div className="side-connect">
                  <ConnectWallet btnTitle="+ Connect Wallet" />
                </div>

                <Link
                  href="/app/Portfolio"
                  onClick={() => setActiveSection("Dashboard")}
                >
                  <div className="dashboard_flex_item">
                    <MdSpaceDashboard />
                    <li>Dashboard</li>
                  </div>
                </Link>

                <Link
                  href="/app/Explore"
                  onClick={() => setActiveSection("Explore")}
                >
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <BsSearch />
                    </div>
                    <li>Explore</li>
                  </div>
                </Link>

                <Link
                  href="/app/Markets"
                  onClick={() => setActiveSection("Market")}
                >
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <MdCandlestickChart />
                    </div>
                    <li>Markets</li>
                  </div>
                </Link>
                <Link
                  href="/app/Transactions"
                  onClick={() => setActiveSection("Transactions")}
                >
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style" className="text-gray-300">
                      <BiTransferAlt />
                    </div>
                    <li>Transactions</li>
                  </div>
                </Link>

                <Link href="/app/Nfts" onClick={() => setActiveSection("NFTs")}>
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <RiNftLine />
                    </div>
                    <li>NFT's </li>
                  </div>
                </Link>
                <Link
                  href="/app/Settings"
                  onClick={() => setActiveSection("Settings")}
                >
                  <div className="dashboard_flex_item">
                    <div id="sidebar__icon__style">
                      <AiFillSetting />
                    </div>
                    <li>Settings</li>
                  </div>
                </Link>
              </div>

              <div className="sidebar_bottom_part">
                <div onClick={() => {}}>
                  <div className="dashboard_flex_item p-2 m-auto bg-red-500 rounded-lg ">
                    <div id="text-white">
                      <BsDashCircle />
                    </div>
                    {/*Bernard.O using disconnect function to disconnect wallet */}
                    <li className="disc" onClick={disconnect}>
                      Disconnect
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* FOR SEARCH ALERT */}
      {/* Dialog */}
      {isDialogOpen && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-[#101010] bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-[9999999999999999] w-screen overflow-y-auto">
            <div class="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-[#1f1f1f] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-[#1f1f1f] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        class="text-base leading-6 text-gray-300"
                        id="modal-title"
                      >
                        Sorry, our search feature is currently unavailable.
                        <br />
                        Please explore our website in the meantime. Thank you
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="bg-[#1f1f1f] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={closeDialog}
                    type="button"
                    class="mt-2 inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;
