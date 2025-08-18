import React, { useState } from "react";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("http://kingvibes.com");
  const [format, setFormat] = useState("PNG");
  const [size, setSize] = useState("1200px");

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-md shadow-lg border">
      <h2 className="text-xl font-semibold mb-4">
        Name your QR code and share
      </h2>

      <label className="block mb-2 font-medium">URL New</label>
      <div className="relative mb-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-md pr-10"
        />
        <span className="absolute right-3 top-2.5 cursor-pointer text-gray-500">
          👁️
        </span>
      </div>

      <div className="flex justify-between gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Image Format</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="PNG">PNG</option>
            <option value="JPG">JPG</option>
            <option value="SVG">SVG</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Image Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="600px">600px</option>
            <option value="800px">800px</option>
            <option value="1000px">1000px</option>
            <option value="1200px">1200px</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Download
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          🔗
        </button>
        <div className="p-2 border rounded-md">
          {/* Replace with real QR generator like react-qr-code */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=http://kingvibes.com&size=100x100"
            alt="QR Code"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-600 border-t pt-3">
        <div className="flex items-center gap-2">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=http://kingvibes.com&size=30x30"
            alt="small qr"
          />
          <span>Track your code and see the scans on it</span>
        </div>
        <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
          Track Scan
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
