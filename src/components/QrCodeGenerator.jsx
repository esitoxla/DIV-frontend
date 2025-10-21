import React, { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { jsPDF } from "jspdf"; //  Import jsPDF
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addQrCode } from "../store/features/qrCodeSlice";
import { useSelector } from "react-redux";
import { fetchFolders } from "../store/features/folderSlice";

const QRCodeGenerator = () => {
  const [name, setName] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [qrType, setQrType] = useState("url");
  const [format, setFormat] = useState("PNG");
  const [size, setSize] = useState("600");
  const [qrSrc, setQrSrc] = useState("");
  const [step, setStep] = useState("generate");
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Close handler: call provided onClose (for inline/modal usage) or navigate back to folder dashboard route
  const handleClose = () => {
    if (onClose && typeof onClose === "function") {
      onClose();
    } else {
      // Route back to the QR folder dashboard
      navigate("/dashboard/myqrcodes");
    }
  };

  const dispatch = useDispatch();

  const { folders, loading, error } = useSelector((state) => state.folders);

  // States
  const [url, setUrl] = useState("");
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPass, setWifiPass] = useState("");
  const [wifiType, setWifiType] = useState("WPA");
  const [smsNumber, setSmsNumber] = useState("");
  const [smsMessage, setSmsMessage] = useState("");
  const [vName, setVName] = useState("");
  const [vPhone, setVPhone] = useState("");
  const [vEmail, setVEmail] = useState("");

  

  // Build QR content
  const buildQRContent = () => {
    switch (qrType) {
      case "wifi":
        return `WIFI:T:${wifiType};S:${wifiSSID};P:${wifiPass};;`;
      case "sms":
        return `SMSTO:${smsNumber}:${smsMessage}`;
      case "vcard":
        return `BEGIN:VCARD
VERSION:3.0
FN:${vName}
TEL:${vPhone}
EMAIL:${vEmail}
END:VCARD`;
      default:
        return url;
    }
  };

  // Generate QR
  const generateQRCode = async () => {
    try {
      const content = buildQRContent();

      if (!content || content.trim() === "") {
        alert("Please enter content before generating QR code.");
        return;
      }

      if (format === "SVG") {
        const svg = await QRCode.toString(content, {
          type: "svg",
          width: parseInt(size),
        });
        setQrSrc(`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`);
      } else {
        await QRCode.toCanvas(canvasRef.current, content, {
          width: parseInt(size),
        });
        setQrSrc(canvasRef.current.toDataURL("image/png")); // always keep as PNG for preview
      }

      setStep("save");
    } catch (err) {
      console.error(err);
    }
  };

  //load folders on mount
  useEffect(() => {
    dispatch(fetchFolders());
  }, [dispatch]);

  // Save QR
  const saveQRCode = async () => {
    try {
      const canvas = document.querySelector("canvas");
      if (!canvas) {
        alert("Please generate a QR code first!");
        return;
      }

      const content = buildQRContent();

      const imageBase64 = canvas.toDataURL("image/png"); // generating base64

      dispatch(
        addQrCode({
          folderId: selectedFolderId,
          name,
          qrType,
          content,
          fileFormat: format.toLowerCase(), //map format properly
          size,
          imageBase64, // send to backend
          status: "active", // optional
          scans: 0, // optional
        })
      );

      alert("QR code added!");
      console.log("QR code saved in DB");
      setStep("download"); // move to download step
    } catch (err) {
      console.error(err);
    }
  };

  // Download
  const downloadQRCode = () => {
    if (format === "PDF") {
      const pdf = new jsPDF();
      pdf.addImage(
        canvasRef.current.toDataURL("image/png"),
        "PNG",
        20,
        20,
        100,
        100
      );
      pdf.save("qr_code.pdf");
    } else {
      const link = document.createElement("a");
      link.href =
        format === "SVG"
          ? qrSrc
          : canvasRef.current.toDataURL(`image/${format.toLowerCase()}`);
      link.download = `qr_code.${format.toLowerCase()}`;
      link.click();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black/20 backdrop-blur-xs z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-5xl h-[90vh] relative flex">
        {/* Close button (top-right) */}
        {/* <button
          onClick={handleClose}
          aria-label="Close QR generator"
          className="absolute top-3 right-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          ×
        </button> */}
        {/* Left form */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">QR Code Generator</h2>

          {/* QR Name */}
          <label className="block text-sm font-medium mb-1">QR Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4"
            placeholder="Enter a name for this QR"
          />

          {/* QR Type */}
          <label className="block text-sm font-medium mb-1">QR Type</label>
          <select
            value={qrType}
            onChange={(e) => setQrType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
          >
            <option value="url">URL / Text</option>
            <option value="wifi">WiFi Login</option>
            <option value="sms">SMS</option>
            <option value="vcard">vCard</option>
          </select>

          {/* Dynamic fields (url, wifi, sms, vcard) */}

          {qrType === "url" && (
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-4"
              placeholder="Enter website URL or text (e.g. https://example.com)"
            />
          )}
          {qrType === "wifi" && (
            <div className="space-y-3 mb-4">
              <input
                type="text"
                placeholder="SSID"
                value={wifiSSID}
                onChange={(e) => setWifiSSID(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={wifiPass}
                onChange={(e) => setWifiPass(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              <select
                value={wifiType}
                onChange={(e) => setWifiType(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Password</option>
              </select>
            </div>
          )}
          {qrType === "sms" && (
            <div className="space-y-3 mb-4">
              <input
                type="text"
                placeholder="Phone Number"
                value={smsNumber}
                onChange={(e) => setSmsNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                placeholder="Message"
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          )}
          {qrType === "vcard" && (
            <div className="space-y-3 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={vName}
                onChange={(e) => setVName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                value={vPhone}
                onChange={(e) => setVPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={vEmail}
                onChange={(e) => setVEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          )}

          {/* Folder Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Folder
            </label>
            {loading ? (
              <p>Loading folders...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <select
                value={selectedFolderId}
                onChange={(e) => setSelectedFolderId(e.target.value)}
                className="w-full border px-3 py-2 rounded mb-4"
              >
                <option value="">-- Choose Folder --</option>
                {folders.map((folder) => (
                  <option key={folder._id} value={folder._id}>
                    {folder.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Format + Size */}
          <div className="flex justify-between gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                File Format
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="PNG">PNG</option>
                <option value="JPG">JPG</option>
                <option value="SVG">SVG</option>
                <option value="PDF">PDF</option> {/* Added PDF */}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="300">300px</option>
                <option value="600">600px</option>
                <option value="800">800px</option>
                <option value="1000">1000px</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mb-4">
            {step === "generate" && (
              <button
                onClick={generateQRCode}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Generate
              </button>
            )}

            {step === "save" && (
              <button
                onClick={saveQRCode}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            )}

            {step === "download" && (
              <button
                onClick={downloadQRCode}
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Download
              </button>
            )}

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Back
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex items-center justify-center w-1/2 p-6 border-l">
          {qrSrc ? (
            <img src={qrSrc} alt="Generated QR Code" className="max-w-full" />
          ) : (
            <p className="text-gray-500">No QR code generated yet</p>
          )}
          <canvas ref={canvasRef} hidden />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
