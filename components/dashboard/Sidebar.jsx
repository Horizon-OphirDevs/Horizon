import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  //   const dispatch = useDispatch();

  //   // Current Path
  //   const current_url_pathname = router.pathname;

  //   const () => { }= () => {
  //     dispatch({ type: CLOSE });
  //   };

  //   const LogOutHandler = () => {
  //     dispatch({ type: CLOSE });

  //     // Redirect To Login Page After 2secs
  //     setTimeout(() => {
  //       router.push("/auth/login");
  //     }, 1000);
  //   };

  //   // Toggle State
  //   const ToggleState = useSelector(
  //     (state) => state.ModeReducer.isSideBarOpen
  //   );

  return (
    <>
      <div className={!true ? "dashboard_sideBar" : "dashboard_sideBar active"}>
        <div className="dashboard_sidebar_height">
          <div className="dashboard_logo">
            <Link href="/" className="dashboard_logo_flex_container">
              {/* <GrNodes style={LogoIconSettings} /> */}
              <h2 style={{ color: "white" }}>ArbiTrak </h2>
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

              <Link href="/app/Transactions" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <GrTransaction />
                  </div>
                  <li>Transactions</li>
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

              <Link href="/app/Nfts" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <RiNftLine />
                  </div>
                  <li>NFTs </li>
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
              <Link href="/help" onClick={() => {}}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    {/* <BsInfoCircle style={Iconstyle} /> */}
                    <BsInfoCircle />
                  </div>
                  <li>Help & Information</li>
                </div>
              </Link>

              <div onClick={() => {}}>
                <div className="dashboard_flex_item p-2 m-3 bg-red-500 rounded">
                  <div id="sidebar__icon__style">
                    <BsDashCircle />
                  </div>
                  <li>Disconnect</li>
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
