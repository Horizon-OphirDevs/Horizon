import React from "react";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-2 gap-5 m-3 grid-flow-row-dense">
      <div className="rounded-lg shadow-xl min-h-[20rem] bg-[#1f1f1f]"></div>
      <div className="rounded-lg shadow-xl min-h-[20rem] bg-[#1f1f1f]">
        <div className="grid grid-cols-2 gap-2 m-5 items-center justify-center">
          <div className="min-h-[17rem] border rounded"></div>
          <div className="min-h-[17rem] border rounded"></div>
        </div>
      </div>
      <div className="rounded-lg shadow-xl  bg-[#1f1f1f] col-span-2">
        <div className="p-3 m-2">
          <div className="overflow-x-scroll flex justify-center align rounded">
            <table className="min-w-full bgr text-white border-lg border-gray-600 rounded">
              <thead>
                <tr>
                  {[
                    "COIN",
                    "PRICE",
                    "HOLDINGS",
                    "CHART",
                    "24hr",
                    "24hr volume",
                    "Market cap",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="py-2 px-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    Ethereum
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    Arbitrum
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    WINR
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
                <tr>
                  <th className="text-md px-6 py-3">
                    <span>img</span>
                    VELA
                  </th>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                  <td className="text-sm px-6 py-3">null</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

Portfolio.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
