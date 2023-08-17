import React from "react";

const Nfts = () => {
  return (
    <div>
      <h1 className="text-gray-300">Nfts</h1>
      <div className="white-glassmorphism flex align-center justify-center">
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
