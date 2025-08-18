import React, { useState } from "react";

const qrData = [
  {
    name: "Summer Campaign",
    type: "Dynamic",
    folder: "Marketing",
    date: "29 Dec 2024",
    scans: 943,
    lastScan: "29 Dec 2024",
    status: "Active",
    icon: "📎",
  },
  {
    name: "Event Pass",
    type: "Static",
    folder: "Event",
    date: "24 Dec 2024",
    scans: 10000,
    lastScan: "24 Dec 2024",
    status: "Active",
    icon: "📎",
  },
  {
    name: "Promo Code",
    type: "Static",
    folder: "No folder",
    date: "12 Dec 2024",
    scans: 5000,
    lastScan: "12 Dec 2024",
    status: "Inactive",
    icon: "📎",
  },
  {
    name: "The X Show",
    type: "Dynamic",
    folder: "Event",
    date: "21 Nov 2024",
    scans: 4600,
    lastScan: "21 Nov 2024",
    status: "Active",
    icon: "📧",
  },
  {
    name: "Puma Kits",
    type: "Dynamic",
    folder: "Marketing",
    date: "21 Nov 2024",
    scans: 8000,
    lastScan: "21 Nov 2024",
    status: "Active",
    icon: "📎",
  },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-600",
};

const QRCodeMainTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {["All Qrs", "Static", "Dynamic", "Scheduled"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1 rounded-full text-sm ${
              tab === "All Qrs"
                ? "bg-green-100 text-green-700"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search Qr..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-2 rounded-md w-1/3"
        />
        <div className="flex items-center space-x-2">
          <button className="border px-3 py-2 rounded-md">Select Date</button>
          <button className="border px-3 py-2 rounded-md">Filters</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">QR Code Name</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Folder</th>
              <th className="px-4 py-3">Date Created</th>
              <th className="px-4 py-3">Scans</th>
              <th className="px-4 py-3">Last Scan</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {qrData
              .filter((qr) =>
                qr.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((qr, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    selectedRow === index
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : ""
                  }`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRow === index}
                      onChange={() =>
                        setSelectedRow(selectedRow === index ? null : index)
                      }
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <span>{qr.icon}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {qr.name}
                        </div>
                        <div className="text-xs text-gray-500">Link</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-green-600">{qr.type}</td>
                  <td className="px-4 py-3 text-blue-600">{qr.folder}</td>
                  <td className="px-4 py-3">{qr.date}</td>
                  <td className="px-4 py-3">{qr.scans.toLocaleString()}</td>
                  <td className="px-4 py-3">{qr.lastScan}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusStyles[qr.status]
                      }`}
                    >
                      {qr.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">•••</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QRCodeMainTable;
