import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#101010] text-white">
      <div className="container mx-auto">
        <header className="flex items-center justify-center h-20">
          {" "}
          {/* Adjust height */}
          <Image src="/usdt.png" alt="Arbitract Logo" width={40} height={56} />
          <h1 className="text-2xl font-semibold">ArbiTrack</h1>
        </header>
      </div>
    </div>
  );
};

export default Header;
