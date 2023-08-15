import React from "react";

const Markets = () => {
  return (
    <div>
      <h1>Markets</h1>
    </div>
  );
};

export default Markets;

Markets.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
