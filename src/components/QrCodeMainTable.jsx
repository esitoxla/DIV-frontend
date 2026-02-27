import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQrCodes,
  deleteQrcode,
  updateQrcode,
} from "../store/features/qrCodeSlice";
import { jsPDF } from "jspdf";
import { Loader2 } from "lucide-react";
import { useRef } from "react";
import { format, isToday, isYesterday, isThisWeek } from "date-fns";
import toast from "react-hot-toast";

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-red-100 text-red-600",
};

const QRCodeMainTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const menuRef = useRef(null);

  const dispatch = useDispatch();
  const { qrCodes, loading, error } = useSelector((state) => state.qrCodes);

  useEffect(() => {
    dispatch(fetchQrCodes()); // fetch when component mounts
  }, [dispatch]);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  // Filter safely by name
  const filteredQrCodes = qrCodes.filter((qr) =>
    qr.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //download qr code
  const downloadQRCode = async (qr, format = "PNG") => {
    if (!qr.imageUrl) {
      toast.error("No QR code image available");
      return;
    }

    try {
      setDownloadingId(qr._id); // mark QR as downloading

      //requests the QR image file from Cloudinary.
      const response = await fetch(qr.imageUrl);
      const blob = await response.blob(); //converts the HTTP response into a binary Blob, which represents the image data (like a file). blob is raw image data you can work with locally.

      if (format === "PDF") {
        // Convert image blob to Base64 for jsPDF
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64data = reader.result;
          const pdf = new jsPDF();
          pdf.addImage(base64data, "PNG", 20, 20, 100, 100);
          pdf.save(`${qr.name || "qr_code"}.pdf`);
        };
        reader.readAsDataURL(blob); //converts the image blob into a Base64 string, now remember imageurl was received from cloudinary as blob, so this converts it back to base64 string.
      } else {
        // Create a download link for PNG or JPG
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `${qr.name || "qr_code"}.${format.toLowerCase()}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }
    } catch (err) {
      console.error("Download failed:", err);
      toast.error("Failed to download QR code. Please try again.");
    } finally {
      setDownloadingId(null); // always reset
    }
  };

  //delete a qrcode
  const handleOpenModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteQrcode(selectedId));
    toast.success("QR code deleted successfully!");
    handleCloseModal();
  };

  //update qr code
  const handleToggleStatus = (qr) => {
    if (!qr) return; // safeguard

    const newStatus = qr.status === "active" ? "inactive" : "active";

    dispatch(
      updateQrcode({
        id: qr._id,
        updateData: { status: newStatus },
      })
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIndex(null); // close menu
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      {loading && <p>Loading QR codes...</p>}{" "}
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full text-sm text-left border rounded">
        <thead className="bg-gray-50 text-gray-600 border rounded-lg">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Folder</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Content</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan="6"
                className="px-4 py-6 text-center text-gray-500 italic"
              >
                Loading QR codes...
              </td>
            </tr>
          ) : filteredQrCodes.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="px-4 py-6 text-center text-gray-500 italic"
              >
                No QR code added yet.
              </td>
            </tr>
          ) : (
            filteredQrCodes.map((qr, index) => (
              <tr key={qr._id} className="border-b">
                {/* Name */}
                <td className="px-4 py-3 font-medium text-gray-800">
                  {qr.name}
                </td>

                {/* Folder */}
                <td className="px-4 py-3 text-gray-600">
                  {qr.folderId?.name || "—"}
                </td>

                {/* Type */}
                <td className="px-4 py-3 text-green-600">
                  {qr.qrType.toUpperCase()}
                </td>

                {/* Content */}
                <td className="px-4 py-3 text-gray-600">{qr.content}</td>

                {/* Date */}
                <td className="px-4 py-3">
                  {(() => {
                    const date = new Date(qr.createdAt);

                    if (isToday(date)) return "Today";
                    if (isYesterday(date)) return "Yesterday";
                    if (isThisWeek(date)) return format(date, "EEEE"); // e.g. Monday
                    return format(date, "EEE, d MMM yyyy"); // e.g. Mon, 21 Oct 2025
                  })()}
                </td>

                {/* Actions Menu */}
                <td className="px-4 py-3 relative">
                  <button
                    onClick={() => toggleMenu(index)}
                    className="p-2 rounded hover:bg-gray-100"
                  >
                    •••
                  </button>

                  {openMenuIndex === index && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 top-0 mt-2 w-32 bg-white border rounded shadow-md z-10"
                    >
                      {/* <button
                        onClick={() => handleToggleStatus(qr)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {qr.status === "Active" ? "Deactivate" : "Activate"}
                      </button> */}

                      {/* Delete button */}
                      <button
                        onClick={() => handleOpenModal(qr._id)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                      >
                        Delete
                      </button>

                      {/* Modal */}
                      {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
                            <h2 className="text-lg font-semibold text-gray-800">
                              Confirm Delete
                            </h2>
                            <p className="text-sm text-gray-600 mt-2">
                              Are you sure you want to delete this QR code? 
                            </p>

                            <div className="flex justify-center gap-4 mt-6">
                              <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={handleConfirmDelete}
                                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      <button
                        className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        onClick={() => downloadQRCode(qr, "PNG")}
                        disabled={downloadingId === qr._id}
                      >
                        {downloadingId === qr._id ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Downloading...
                          </>
                        ) : (
                          "Download"
                        )}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QRCodeMainTable;
