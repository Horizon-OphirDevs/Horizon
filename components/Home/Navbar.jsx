import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#101010] text-white">
      <div className="container mx-auto">
        <header className="flex items-center justify-center h-20 pt-5">
          {" "}
          {/* Adjust height */}
          {/*Bernard.O I Exported the logo from your figma design and replaced it*/}
          <Image
            src="/HorizonWithLogo.png"
            alt="Horizon Logo"
            width={150}
            height={150}
          />
        </header>
      </div>
    </div>
  );
};

export default Header;
