import "@/styles/globals.css";
import "@/styles/layout.scss";
//Bernard.O Import The Provider and Wrap it round your project
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import Header from "@/components/Header";
import Link from "next/link";

import DashboardLayout from "@/layout/dashboard";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <div>
        {/*Bernard.O You are wrapping so that when you connect your wallet the whole app is connected*/}
        <ThirdwebProvider activeChain="arbitrum" 
        clientId=" f8afa748ba8ce6673a35313b9ac7f9bf">
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
        </ThirdwebProvider>
      </div>
    );
  }

  return (
    <div>
      {/*Bernard.O You are wrapping so that when you connect your wallet the whole app is connected*/}
      <ThirdwebProvider activeChain="arbitrum" >
      <Component {...pageProps} />
      </ThirdwebProvider>
    </div>
  );
}
