import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#101010] text-white">
      <div className="container mx-auto">
        <header className="flex items-center justify-center h-20">
          {" "}
          {/* Adjust height */}
          {/*Bernard.O I Exported the logo from your figma design and replaced it*/}
          <Image src="/arbitrak.png" alt="Arbitrak Logo" width={200} height={280} />
        </header>
      </div>
    </div>
  );
};

export default Header;
