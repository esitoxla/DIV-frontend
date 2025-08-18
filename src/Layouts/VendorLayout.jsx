import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar"
import { useState } from "react";



export default function VendorLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-full w-full">
      {isSidebarOpen && (
        <div className="w-full md:w-2/9">
          <Sidebar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
      )}

      <div className="flex flex-col w-full">
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Outlet />
      </div>
    </div>
  );
}
