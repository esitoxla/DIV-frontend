// import React, { useState } from 'react';

const QRTable = () => {
//   const [currentPage, setCurrentPage] = useState(1);

  const tabs = ['All Qrs', 'Static', 'Dynamic', 'Scheduled'];
  const tableData = [
    {
      name: 'Summer Campaign',
      type: 'Link',
      scans: 943,
      unique: 435,
      location: 'Ghana',
      device: 'Android',
      date: '29 Mar 2025',
      icon: '📎',
    },
    {
      name: 'Promo Code',
      type: 'Link',
      scans: 5000,
      unique: 2000,
      location: 'Nigeria',
      device: 'Mad OS',
      date: '29 Mar 2025',
      icon: '📎',
    },
    {
      name: 'The X Show',
      type: 'Email',
      scans: 4600,
      unique: 700,
      location: 'USA',
      device: 'Android',
      date: '29 Mar 2025',
      icon: '📧',
    },
  ];

  return (
    <div className="p-4 font-sans bg-white rounded-lg shadow-md max-w-screen-lg mx-auto">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-1 rounded-full text-sm ${
              tab === 'All Qrs'
                ? 'bg-green-100 text-green-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search + Date + Filters */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search Qr..."
          className="border px-3 py-2 rounded-md w-1/3"
        />
        <div className="flex items-center space-x-2">
          <button className="border px-3 py-2 rounded-md">Select Date</button>
          <button className="border px-3 py-2 rounded-md">Filters</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">QR Code Name</th>
              <th className="px-4 py-2">Total Scans</th>
              <th className="px-4 py-2">Unique Scans</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Device</th>
              <th className="px-4 py-2">Last Scan</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded">
                      <span role="img" aria-label="icon">
                        {row.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{row.name}</div>
                      <div className="text-xs text-gray-500">{row.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{row.scans.toLocaleString()}</td>
                <td className="px-4 py-3">{row.unique.toLocaleString()}</td>
                <td className="px-4 py-3 text-blue-600">{row.location}</td>
                <td className="px-4 py-3">{row.device}</td>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3 text-center text-green-600">•••</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>Showing 1-6 from 20</div>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">{'<'}</button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">2</button>
          <button className="px-3 py-1 rounded hover:bg-gray-200">3</button>
          <span className="px-2 py-1">...</span>
          <button className="px-3 py-1 rounded hover:bg-gray-200">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default QRTable;