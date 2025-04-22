
import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const EarningsChart: React.FC = () => {
  // Sample data for the chart
  const data = [
    { name: "Jan", amount: 1200 },
    { name: "Feb", amount: 1800 },
    { name: "Mar", amount: 1550 },
    { name: "Apr", amount: 2100 },
    { name: "May", amount: 1900 },
    { name: "Jun", amount: 2400 },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          formatter={(value: number) => [`$${value}`, "Earnings"]}
          cursor={{ fill: "rgba(155, 135, 245, 0.1)" }}
        />
        <Bar
          dataKey="amount"
          fill="#9B87F5"
          radius={[4, 4, 0, 0]}
          className="hover:fill-dwork-purple-600"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningsChart;
