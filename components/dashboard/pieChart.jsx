import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts"; // Import Label from recharts

const PieChartComponent = ({ data }) => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        labelLine={false} // Disable label lines
        label={renderCustomizedLabel} // Use a custom label rendering function
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={`#${(Math.random() * 0xFFFFFF << 0).toString(16)}`} />
        ))}
      </Pie>
    </PieChart>
  );
};

// Custom label rendering function
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {name}
    </text>
  );
};

export default PieChartComponent;
