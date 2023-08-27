import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//Bernard.O Using Thirdweb SDK for Connecting Wallet {https://portal.thirdweb.com/react} <--Check it Out
import { ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
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

// Icon Style
const Iconstyle = {
  fontSize: "1.2em",
  cursor: "pointer",
  color: "white",
};

const Topbar = ({ activeSection }) => {
  //activeSetion Fetched From dashboard to Update The pages
  //   const dispatch = useDispatch();

  //   const Clickhandler = () => {
  //     // Do Action
  //     dispatch({ type: TOGGLE_SIDEBAR });
  //  };

  const [navbarOpen, setNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [activeSectionMobile, setActiveSection] = useState("Dashboard");
  //Bernard.O Making use Of the react hook to disconnect the Wallet
  const disconnect = useDisconnect();

  const addressc = useAddress();
  console.log(addressc);

   // Step 1: State variables for search query and results
   const [searchQuery, setSearchQuery] = useState("");
   const [searchResults, setSearchResults] = useState([]);
 
   // Step 2: Search function
   const handleSearch = async () => {
     if (searchQuery) {
       try {
         const response = await axios.get(
           "https://api.coingecko.com/api/v3/search",
           {
             params: {
               query: searchQuery,
             },
           }
         );
 
         setSearchResults(response.data);
       } catch (error) {
         console.error("Error fetching data from CoinGecko API:", error);
         setSearchResults([]);
       }
     }
   };
 
   // Step 3: UseEffect to trigger search on query change
   useEffect(() => {
     handleSearch();
   }, [searchQuery]);

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
        <div className="text-white text-2xl md:hidden" id="open">
          <GiHamburgerMenu onClick={toggleNavbar} />
        </div>

        <div className=" gap-2 px-2 hidden md:block w-[50%]">
          <div class="relative border flex  md:w-full bg-[#1f1f1f] items-stretch rounded-lg">
            <input
              type="search"
              className="relative m-0 block md:w-52 min-w-0  flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-xs font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary"
              placeholder="search token or contract "
            />
            {/* <!--Search icon--> */}
            <span class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
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
            <ul className="text-gray-300">
              <div className="sidebar_top_part">
                <div className="side-connect">
                  <ConnectWallet btnTitle="+ Connect Wallet" />
                </div>

                <div>
                  <div class="relative border flex mb-2  md:w-full md:hidden bg-[#1f1f1f] items-stretch rounded-lg">
                    <input
                      type="search"
                      className="relative m-0 block md:w-52 min-w-0  flex-auto rounded bg-transparent bg-clip-padding px-3 py-[0.25rem] text-xs font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:focus:border-primary"
                      placeholder="search token or contract "
                    />
                    {/* <!--Search icon--> */}
                    <span class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
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
                  onClick={() => setActiveSection("Transaction")}
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
    </header>
  );
};

export default Topbar;
