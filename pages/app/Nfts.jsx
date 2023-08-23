import React from "react";
import Image from "next/image";

const Nfts = () => {
  return (
    <div className="nft_page">
      <div className="transparent_bg ">
        <p className="text-gray-300 text-3xl flex align-center m-auto">
          COMING SOON
        </p>
      </div>
    </div>
  );
};

export default Nfts;

Nfts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
