import React from "react";
import { CiSettings } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { LiaCrownSolid } from "react-icons/lia";
import { NavLink } from "react-router";
import { MdClose } from "react-icons/md";

export default function Sidebar({ toggleSidebar }) {
  return (
    <>
      <div
        className="
         fixed top-0 left-0
         text-gray-600 border-r border-gray-200
          w-64 p-4 h-screen flex flex-col gap-6 py-6
          bg-white z-50 overflow-y-auto
      "
      >
        <div className="sm:hidden flex justify-end">
          <button onClick={toggleSidebar} className="text-2xl text-gray-500">
            <MdClose />
          </button>
        </div>

        <div className="text-2xl font-bold">TLPay</div>

        <div className="flex flex-col gap-6 text-gray-600 cursor-pointer pt-8 py-6">
          <NavLink to="myqrcodes">
            {({ isActive }) => (
              <div
                className={`flex gap-2 items-center px-4 py-2 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 rounded"
                    : "text-gray-600"
                }`}
              >
                <span className="text-2xl">
                  <BiCategory />
                </span>
                <p>My QR Codes</p>
              </div>
            )}
          </NavLink>

          <NavLink to="analytics">
            {({ isActive }) => (
              <div
                className={`flex gap-2 items-center px-4 py-2 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 rounded"
                    : "text-gray-600"
                }`}
              >
                <span className="text-2xl">
                  <FiBarChart2 />
                </span>
                <p>Analytics</p>
              </div>
            )}
          </NavLink>
        </div>

        <div className="border-b p-0 border-gray-200 py-4 "></div>

        <NavLink to="settings">
          {({ isActive }) => (
            <div
              className={`flex gap-2 items-center px-4 py-2 ${
                isActive ? "bg-blue-100 text-blue-700 rounded" : "text-gray-600"
              }`}
            >
              <span className="text-2xl">
                <FiBarChart2 />
              </span>
              <p>Settings</p>
            </div>
          )}
        </NavLink>

        <div className="bg-blue-600 text-white p-3 rounded flex flex-col gap-3 ">
          <span className="text-2xl p-1 border-0  rounded w-[2rem] bg-blue-500">
            <LiaCrownSolid />
          </span>
          <p className="font-medium">Get Premium Features</p>
          <p className="text-sm font-light">
            Try new experiences with premium features on TL Pay.
          </p>

          <button className="border-0 bg-white text-black rounded px-1 py-2 font-medium cursor-pointer">
            <NavLink to="price">Upgrade Plan</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
