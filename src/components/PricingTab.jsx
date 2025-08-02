import { button, label } from "framer-motion/client";
import React from "react";

const tabItems = [
  { key: "monthly", label: "Monthly" },
  { key: "yearly", label: "Yearly" },
];

export default function PricingTab({ activePlan, changeTab }) {
  return (
    <div className="lg:w-[20%] mx-auto flex items-center justify-center gap-3 font-medium my-8">
      {tabItems.map((tab) => (
        <button
          key={tab.key}
          onClick={() => changeTab(tab.key)}
          className={`px-6 py-2 rounded transition duration-200 ${
            activePlan === tab.key
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

