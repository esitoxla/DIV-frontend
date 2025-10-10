import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFolders,
  addFolder,
  deleteFolder,
} from "../store/features/folderSlice";

const QRFolderDashboard = () => {
  const dispatch = useDispatch();
  const { folders, loading, error } = useSelector((state) => state.folders);

  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  //for deleting a folder
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  const [folderToDelete, setFolderToDelete] = useState(null); //This holds the specific folder object i want to delete

  // Fetch folders on mount
  useEffect(() => {
    dispatch(fetchFolders());
  }, [dispatch]);

  // Handle create folder
  const handleCreateFolder = () => {
    if (!name.trim()) return;
    dispatch(addFolder({ name }));
    setName("");
    setIsCreating(false);
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    dispatch(fetchFolders(query));
  };

  //handle delete a folder
  const handleDeleteClick = (folder) => {
    setFolderToDelete(folder);
    setShowConfirm(true);
  };

  //confirm delete
  const confirmDelete = () => {
    if (confirmInput === "DELETE") {
      dispatch(deleteFolder(folderToDelete._id));
      setShowConfirm(false);
      setConfirmInput("");
      setFolderToDelete(null);
    } else {
      alert("Please type DELETE to confirm");
    }
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
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      {/* Loader & Error */}
      {loading && <p className="text-gray-500">Loading folders...</p>}
      {error && <p className="text-red-500">{error}</p>}
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
              <span
                onClick={() => handleDeleteClick(folder)}
                className="text-red-400 cursor-pointer border border-red-400 px-2 py-1 rounded hover:bg-red-400 hover:text-white bg-transparent"
              >
                del
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{folder.qrCount || 0} qrs</span>
              <span>
                {folder.createdAt
                  ? new Date(folder.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "N/A"}
              </span>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
      {/* Delete confirmation */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Confirm Deletion
            </h2>
            <div className="text-gray-600 mb-4">
              <span>You are about to delete the folder</span>
              <span className="font-bold px-2">{folderToDelete?.name}</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              Please type <span className="font-semibold">DELETE</span> to
              confirm:
            </p>
            <input
              type="text"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:ring-1 focus:ring-red-500"
            />
            <div className="flex justify-end gap-3">
              {/* this button is for cancel when it is clicked, it set modal to false, closes modal, set input to empty strings, no folder to selected */}
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setConfirmInput("");
                  setFolderToDelete(null);
                }}
                className="px-4 py-2 bg-gray-200 rounded-md text-sm cursor-pointer"
              >
                Cancel
              </button>

              {/* this button actually confirms the delete, therefore folder is deleted, also when what inputed is DELETE, button color is set to deep red, also when what is in the input is not equal to DELETE the button is disabled */}
              <button
                onClick={confirmDelete}
                className={`px-4 py-2 rounded-md text-sm text-white cursor-pointer ${
                  confirmInput === "DELETE"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-300 cursor-not-allowed"
                }`}
                disabled={confirmInput !== "DELETE"}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRFolderDashboard;
