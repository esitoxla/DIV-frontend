import React from 'react'

const tabItems = [
    {key: "basics", label: "QR Code Basics"},
    {key: "download", label: "Download & Scan"},
    {key: "payments", label: "Payments"}
]

export default function Tabs({activeTab, changeTab}) {
  return (
    <div className=''>
      {tabItems.map((tab) => (
        <button
          onClick={() => changeTab(tab.key)}
          key={tab.key}
          className={`py-2 px-4 font-medium transition-all cursor-pointer ${
            activeTab === tab.key
              ? "border border-gray-400 bg-white rounded-t-sm border-b-white"
              : "text-gray-500 "
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
