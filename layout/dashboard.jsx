import React,{ useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Font Management
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Dashboard layout Components
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  //Bernard.O Added this UseState to Update the Pages 
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <>
      <Head>
        <title>Portfolio Tracker for the Arbitrum Blockchain</title>
        <meta
          name="Arbitrum Portfolio Tracker"
          content="Portfolio Tracker for the Arbitrum Blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <div className="dashboard_grid_layout bg-[#101010]">
          <div className="dashboard_grid_column">
            <Sidebar setActiveSection={setActiveSection} />
          </div>

          <div className="dashboard_main bg-[#101010]">
            <div className="">
              <Topbar activeSection={activeSection} />
              <div className="main_content bg-[#101010]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
