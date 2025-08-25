import React from "react";
import { Plus } from "lucide-react";

export default function AnalyticsIntro() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-500">Browse all QR codes</p>
        </div>
        <div className="flex gap-4 items-center">
          <input type="date" className="border rounded px-3 py-2 text-sm" />
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
            <Plus size={16} /> Create QR Code
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          ["Total QR Codes", 121],
          ["Active QR Codes", 83],
          ["Total Scans", 234],
          ["Folders", 12],
        ].map(([label, count], index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-blue-300">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold">{count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
