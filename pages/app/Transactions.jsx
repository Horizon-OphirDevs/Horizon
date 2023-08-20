import React from "react";

const Transactions = () => {
  const active = {
    backgroundColor: "#0BAAB5",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    padding: "10px",
  };

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-3 text-xs text-center mt-4">
        <div style={active}>
          {/* a link would be here in order to display transfer, same applies to all other buttons 
      DoctorInTech go see shege 😂 */}
          Transfers
        </div>
        <div className="border p-2 rounded  text-gray-400">Holders</div>
        <div className="border p-2 rounded text-gray-400">Info</div>
        <div className="border p-2 rounded text-gray-400">DEX Trades</div>
        <div className="border p-2 rounded text-gray-400">Contract</div>
        <div className="border p-2 rounded text-gray-400">Analytics</div>
        <div className="border p-2 rounded text-gray-400">Comments</div>
      </div>
      <div className="rounded-lg shadow-xl  bg-[#1f1f1f] col-span-7 border row-span-10 p-3 m-3 h-80">
        <h1 className="text-gray-300 text-xl">
          This is where all the data is to be inputted
        </h1>
      </div>
    </div>
  );
};

export default Transactions;

Transactions.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
