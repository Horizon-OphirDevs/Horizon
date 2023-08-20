import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// Redux
// import { useDispatch, useSelector } from "react-redux";
// import { CLOSE } from "../../redux/actions/action";

// React Icon

import { MdSpaceDashboard } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { MdCandlestickChart } from "react-icons/md";
import { RiNftLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";

// Icon Style
const Iconstyle = {
  fontSize: "1.5em",
  color: "#373131",
};

// Logo Icon Settings
const LogoIconSettings = {
  fontSize: "2.5em",
  color: "#373131",
};

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      <div className={!true ? "dashboard_sideBar" : "dashboard_sideBar active"}>
        <div className="dashboard_sidebar_height">
          <div className="dashboard_logo">
            <Link href="/" className="dashboard_logo_flex_container">
              <div className="side_img">
                <Image
                  src="/usdt.png"
                  alt="Arbitrak Logo"
                  width={40}
                  height={56}
                />
                <h2 style={{ color: "white" }}>ArbiTrak </h2>
              </div>
            </Link>
          </div>
        </div>

        <div className="dashboard_sidebar_navigation ">
          <ul className="text-gray-300">
            <div className="sidebar_top_part">
              <Link href="/app/Portfolio" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <MdSpaceDashboard />
                  <li>Dashboard</li>
                </div>
              </Link>

              <Link href="/app/Explore" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <BsSearch />
                  </div>
                  <li>Explore</li>
                </div>
              </Link>

              <Link href="/app/Markets" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <MdCandlestickChart />
                  </div>
                  <li>Markets</li>
                </div>
              </Link>
              <Link href="/app/Transactions" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style" className="text-gray-300">
                    <BiTransferAlt />
                  </div>
                  <li>Transactions</li>
                </div>
              </Link>

              <Link href="/app/Nfts" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <RiNftLine />
                  </div>
                  <li>NFT's </li>
                </div>
              </Link>
              <Link href="/app/Settings" onClick={() => {}}>
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
                  <li className="disc">Disconnect</li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
