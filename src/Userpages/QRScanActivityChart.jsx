import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Dot,
} from 'recharts';

const data = [
  { date: 'Apr 1', scans: 110 },
  { date: 'Apr 2', scans: 90 },
  { date: 'Apr 3', scans: 140 },
  { date: 'Apr 4', scans: 120 },
  { date: 'Apr 5', scans: 40 },
  { date: 'Apr 6', scans: 160 },
  { date: 'Apr 7', scans: 130 },
  { date: 'Apr 8', scans: 100 },
  { date: 'Apr 9', scans: 145 },
  { date: 'Apr 10', scans: 160 },
  { date: 'Apr 11', scans: 80 },
  { date: 'Apr 12', scans: 140 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white px-3 py-2 rounded shadow-md text-sm">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          <span>Total Scans : {payload[0].value}</span>
        </div>
        <div>{`Monday, ${label}`}</div>
      </div>
    );
  }
  return null;
};

const QRScanActivityChart = () => {
  const [sortBy, setSortBy] = useState('QR Code');
  const [timeRange, setTimeRange] = useState('Last 12 days');

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">QR Code scan activities</h2>
        <div className="flex space-x-4 text-sm text-gray-600">
          <div>
            Sort by:{' '}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-medium focus:outline-none"
            >
              <option>QR Code</option>
              <option>Date</option>
            </select>
          </div>
          <div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-transparent font-medium focus:outline-none"
            >
              <option>Last 12 days</option>
              <option>Last 7 days</option>
              <option>This month</option>
            </select>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        <span className="text-sm text-gray-600">All QR Codes</span>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 300]} tickCount={7} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="scans"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QRScanActivityChart;