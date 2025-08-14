import React from 'react';

const folders = [
  {
    name: 'Marketing',
    qrCount: 12,
    date: 'Mar 23, 2025',
  },
  {
    name: 'Event',
    qrCount: 12,
    date: 'Mar 23, 2025',
  },
];

const QRFolderDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Mr QR Codes</h1>
          <p className="text-sm text-gray-500">Browse all QR Codes</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          + Create QR Code
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Folder..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Folder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {folders.map((folder, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-200 rounded-sm"></div>
                <span className="font-medium text-gray-800">{folder.name}</span>
              </div>
              <span className="text-gray-400 cursor-pointer">•••</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{folder.qrCount} qrs</span>
              <span>{folder.date}</span>
            </div>
          </div>
        ))}

        {/* Create New Folder */}
        <div className="bg-white border rounded-lg p-4 flex items-center justify-center cursor-pointer hover:shadow-md transition">
          <div className="text-center text-blue-600">
            <div className="text-3xl">📁</div>
            <div className="text-sm mt-1 font-medium">+ Create new folder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRFolderDashboard;