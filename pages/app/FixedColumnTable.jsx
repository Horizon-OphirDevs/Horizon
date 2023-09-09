import React from "react";

const FixedColumnTable = () => {
  const rows = 8;
  const columns = 30;

  return (
    <div className="overflow-x-auto w-full relative m-5">
      <table className="min-w-max border-collapse whitespace-nowrap">
        <thead>
          <tr>
            <th className="fixed-column p-2 border border-gray-300 bg-gray-100">
              Header 1
            </th>
            {Array.from({ length: columns }).map((_, idx) => (
              <th key={idx} className="p-2 border border-gray-300 bg-gray-100">
                Header {idx + 2}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="fixed-column p-2 border border-gray-300 bg-blue-500">
                Row {rowIndex + 1}
              </td>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="p-2 border border-gray-300">
                  Item {colIndex + 2}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FixedColumnTable;

FixedColumnTable.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
