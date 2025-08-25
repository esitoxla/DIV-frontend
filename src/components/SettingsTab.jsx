import React from 'react'


const tabItems = [
  { key: "account", label: "Account" },
  { key: "notify", label: "Notification & Preference" },
];

export default function SettingsTab({ activeTab, changeTab}) {
  return (
    <div className="flex gap-6 border-b border-gray-300 md:w-[26%] ">
      {tabItems.map((tab) => (
        <button
          onClick={() => changeTab(tab.key)}
          key={tab.key}
          className={`inline-flex pb-1 font-medium transition-all cursor-pointer ${
            activeTab === tab.key
              ? "border-b-2 border-blue-400 text-blue-600"
              : "text-gray-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
