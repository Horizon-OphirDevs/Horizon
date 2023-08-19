import React from "react";
import { useState } from "react";

// React Icon
import { FaBars, FaUserTie } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

// Redux
// import { useDispatch } from "react-redux";
// import { TOGGLE_SIDEBAR } from "../../redux/actions/action";

// Icon Style
const Iconstyle = {
  fontSize: "1.8em",
  cursor: "pointer",
  color: "white",
};

const Topbar = () => {
  //   const dispatch = useDispatch();

  //   const Clickhandler = () => {
  //     // Do Action
  //     dispatch({ type: TOGGLE_SIDEBAR });
  //   };

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div className="dashboard_topBar">
        <div className="dashboard_topBar_flex">
          <div className="dashboard_topBar_title" onClick={() => {}}>
            <div className="hambuger_icon" onClick={toggleNavbar}>
              <FaBars style={Iconstyle} />
            </div>
            <div
              className={`mt-2 ${
                navbarOpen ? "block z-10 h-[20rem] bg-blue-300 p-3 " : "hidden"
              } md:block`}
            ></div>
            <div className="dashboard_user_business_name">
              <h2 className="text-gray-300">Portfolio Tracker</h2>
            </div>
          </div>
          <div className="dashboard_topBar_left">
            <div className="dashboard_topbar_user_info">
              <div className="dashboard_notification">
                <IoNotificationsSharp style={Iconstyle} />
                <div className="dashboard_notification_counter">4</div>
              </div>
              <div className="dashboard_user_photo">
                <FaUserTie style={Iconstyle} />
              </div>
              <button className="rounded bg-[#0f3056] text-white px-4 py-2">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
