import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartComponent = ({ data }) => {
  const [selectedSegment, setSelectedSegment] = useState(null);

  const handleMouseEnter = (entry) => {
    setSelectedSegment(entry.name);
  };

  const handleMouseLeave = () => {
    setSelectedSegment(null);
  };

  const handleClick = (entry) => {
    if (window.innerWidth <= 768) {
      // For mobile view, show the label on click
      setSelectedSegment(entry.name);
    }
  };

  return (
    <div className="pie-chart-container">
      <PieChart width={400} height={300}>
        {/* Outer Pie (the hollow part) */}
        <Pie
          data={data}
          cx="40%"
          cy="40%"
          outerRadius={80}
          innerRadius={60}
          fill="transparent"
          labelLine={false}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`#${(Math.random() * 0xFFFFFF << 0).toString(16)}`} />
          ))}
        </Pie>

        {/* Inner Pie (to cover the center) */}
        <Pie
          data={data}
          cx="40%"
          cy="40%"
          outerRadius={60}
          innerRadius={0}
          fill="transparent"
        />
      </PieChart>
      <div className="label">
        {selectedSegment && (
          <div className="label-text text-center text-white">{selectedSegment}</div>
        )}
      </div>
    </div>
  );
};

export default PieChartComponent;
