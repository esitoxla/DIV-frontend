import React, { useState } from "react";

const qrData = [
  { name: "Summer Campaign", type: "Dynamic", scans: 943, status: "Active" },
  { name: "Event Pass", type: "Static", scans: 10000, status: "Active" },
  { name: "Promo Code", type: "Static", scans: 5000, status: "Inactive" },
  { name: "The X Show", type: "Dynamic", scans: 4600, status: "Active" },
  { name: "Puma Kits", type: "Dynamic", scans: 8000, status: "Active" },
];

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-600",
};

const QRCodeMainTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Search */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search QR..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-2 rounded-md w-1/3"
        />
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Scans</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {qrData
              .filter((qr) =>
                qr.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((qr, index) => (
                <tr key={index} className="border-b">
                  {/* Name */}
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {qr.name}
                  </td>

                  {/* Type */}
                  <td className="px-4 py-3 text-green-600">{qr.type}</td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusStyles[qr.status]
                      }`}
                    >
                      {qr.status}
                    </span>
                  </td>

                  {/* Scans */}
                  <td className="px-4 py-3">{qr.scans.toLocaleString()}</td>

                  {/* Actions Menu */}
                  <td className="px-4 py-3 relative">
                    <button
                      onClick={() => toggleMenu(index)}
                      className="p-2 rounded hover:bg-gray-100"
                    >
                      •••
                    </button>

                    {openMenuIndex === index && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                          Edit
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                          {qr.status === "Active" ? "Pause" : "Activate"}
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600">
                          Delete
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                          Download
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QRCodeMainTable;
