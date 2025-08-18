import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const osData = [
  { name: "IOS", value: 55, color: "#22C55E" },
  { name: "Android", value: 55, color: "#FACC15" },
  { name: "Mac OS", value: 55, color: "#F97316" },
  { name: "Windows", value: 55, color: "#3B82F6" },
];

const countryData = [
  { name: "Ghana", value: 55, color: "#22C55E" },
  { name: "Nigeria", value: 55, color: "#0EA5E9" },
  { name: "USA", value: 55, color: "#F9A8D4" },
  { name: "Mali", value: 55, color: "#3B82F6" },
];

const regionData = [
  { name: "Accra", value: 55, color: "#7DD3FC" },
  { name: "Lagos", value: 55, color: "#FBCFE8" },
  { name: "Newyork", value: 55, color: "#FBBF24" },
  { name: "Paris", value: 55, color: "#3B82F6" },
];

const DonutChartCard = ({ title, data }) => (
  <div className="bg-white p-4 rounded-xl shadow-md w-full md:w-1/3">
    <h2 className="text-sm font-semibold text-gray-800 mb-4">{title}</h2>
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <ul className="mt-4 space-y-2 text-sm">
      {data.map((entry, index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}
          </span>
          <span className="font-semibold text-gray-700">55%</span>
        </li>
      ))}
    </ul>
  </div>
);

const DonutCharts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 px-6 py-8">
      <DonutChartCard title="Scans by Operating system" data={osData} />
      <DonutChartCard title="Scans by Country" data={countryData} />
      <DonutChartCard title="Scans by Region" data={regionData} />
    </div>
  );
};

export default DonutCharts;
