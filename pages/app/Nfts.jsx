import React from "react";

const Nfts = () => {
  return (
    <div>
      <h1>Nfts</h1>
    </div>
  );
};

export default Nfts;

Nfts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
