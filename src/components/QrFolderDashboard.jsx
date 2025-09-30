import React, { useState } from "react";
import { NavLink } from "react-router";

const QRFolderDashboard = () => {
  const [folders, setFolders] = useState([
    { name: "Marketing", qrCount: 12, date: "Mar 23, 2025" },
    { name: "Event", qrCount: 8, date: "Mar 25, 2025" },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;

    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    

    setFolders([...folders, { name: newFolderName, qrCount: 0, date: today }]);
    setNewFolderName("");
    setIsCreating(false);
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">My QR Codes</h1>
          <p className="text-sm text-gray-500">Browse all QR Codes</p>
        </div>

        {/* Create QR Code */}
        <NavLink to="create">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            + Create QR Code
          </button>
        </NavLink>
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
            className="bg-white border border-blue-300 rounded-lg p-4 hover:shadow-md transition"
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
        <div className="bg-white border border-blue-300 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition">
          {!isCreating ? (
            <div
              className="text-center text-blue-600 cursor-pointer"
              onClick={() => setIsCreating(true)}
            >
              <div className="text-3xl">📁</div>
              <div className="text-sm mt-1 font-medium">
                + Create new folder
              </div>
            </div>
          ) : (
            <div className="w-full">
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Folder name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex justify-between space-x-2">
                <button
                  onClick={handleCreateFolder}
                  className="flex-1 bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsCreating(false);
                    setNewFolderName("");
                  }}
                  className="flex-1 bg-gray-200 px-3 py-1 rounded-md text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

       {/* QR Code Modal */}
      {isCreating && <QRCodeGenerator onClose={() => setIsCreating(false)} />}
    </div>
  );
};

export default QRFolderDashboard;
