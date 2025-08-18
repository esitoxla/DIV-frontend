import React from "react";
import { MdMenu } from "react-icons/md";
import { LiaCrownSolid } from "react-icons/lia";
import profile from "../assets/images/profile.1.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";

export default function Topbar({ toggleSidebar }) {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-200 py-2 px-4">
      
      <div className="flex gap-6 items-center">
        
        <div onClick={toggleSidebar} className="cursor-pointer">
          <MdMenu className="text-2xl" />
        </div>

        
        <button className="hidden sm:flex items-center gap-1 border border-gray-100 bg-gray-50 shadow-xs px-4 py-2 rounded">
          <span className="text-2xl text-blue-700">
            <LiaCrownSolid />
          </span>
          <div className="font-medium">
            <NavLink to="price">Upgrade Plan</NavLink>
          </div>
        </button>
      </div>

      
      <div className="flex gap-2 sm:gap-4 items-center">
        
        <div>
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
        </div>

        
        <div className="hidden sm:block text-xs">
          <p className="font-medium">Moni Ray</p>
          <p>Vendor</p>
        </div>

       
        <div className="text-gray-300 rounded-full flex items-center justify-center w-6 h-6 border border-gray-200 cursor-pointer">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
