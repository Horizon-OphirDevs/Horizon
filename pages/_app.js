import "@/styles/globals.css";
import "@/styles/layout.scss";
// import Header from "@/components/Header";
import Link from "next/link";

import DashboardLayout from "@/layout/dashboard";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <div>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </div>
    );
  }

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
