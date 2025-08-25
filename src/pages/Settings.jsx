import React from 'react'
import SettingsTab from '../components/SettingsTab'
import { useState } from 'react';
import Notify from "../components/Notify"
import Accounts from '../components/Accounts';

export default function Settings() {
    const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="bg-gray-100 px-6 py-4 md:px-8 flex flex-col gap-4">
      <div className='flex flex-col gap-2'>
        <h3 className="text-3xl font-medium">Settings</h3>
        <p className="text-gray-500 font-medium">Tailor Your Experience</p>
      </div>

      <SettingsTab activeTab={activeTab} changeTab={setActiveTab} />

      <div className="mt-6">
              {activeTab === "account" ? <Accounts /> : <Notify />}
            </div>
      
    </div>
  );
}
