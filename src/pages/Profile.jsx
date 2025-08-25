import React from "react";
import { User, LogOut } from "lucide-react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import profile from "../assets/images/profile.1.jpg";

export default function Profile() {
  const [formData, setFormData] = useState({
    username: "Asenkrekmanov",
    email: "azkrekmanov@gmail.com",
    password: "bigbigworld123",
    repeatPassword: "bigbigworld123",
    about:
      "I am Asen Krekmanov and I am a dedicated UI/UX Designer from Sofia, Bulgaria.",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-[3rem]">
      <div className="bg-white rounded-2xl shadow-lg w-[90%]  h-full flex flex-col gap-6 overflow-hidden p-6">
        {/* Header */}
        <div className="w-full flex relative flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="px-0 sm:px-6 text-2xl sm:text-3xl font-bold text-[#223962] mb-4 sm:mb-0">
            Profile
          </h2>

          <ul className="absolute sm:static right-8 sm:right-0">
            <li className="flex items-center gap-2 cursor-pointer font-medium text-red-500 hover:underline">
              <LogOut size={18} /> Log Out
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="px-0 sm:px-6">
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Avatar + Socials */}
            <div className="flex flex-col items-start gap-8 mb-6 w-full lg:w-[30%]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-gray-300">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="px-3 py-2 text-[#223962] hover:bg-blue-900 hover:text-white font-medium rounded-md hover:text-sm cursor-pointer">
                  Upload Picture
                </button>
              </div>

              <div className="flex flex-row flex-wrap sm:flex-col gap-3 text-sm sm:text-base justify-center sm:justify-start">
                <button className="flex items-center gap-2 text-blue-600">
                  <FaFacebook size={18} />
                  <span className="text-[#162a4d]">Facebook</span>
                </button>

                <button className="flex items-center gap-2 text-sky-500 ">
                  <FaTwitter size={18} />
                  <span className="text-[#162a4d]">Twitter</span>
                </button>

                <button className="flex items-center gap-2 text-pink-600 ">
                  <FaInstagram size={18} />
                  <span className="text-[#162a4d]">Instagram</span>
                </button>

                <button className="flex items-center gap-2 ">
                  <FcGoogle size={18} />
                  <span className="text-[#162a4d]">Google+</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 gap-6 md:w-[25rem] text-[#223962]">
              <div>
                <label className="block text-sm font-medium">
                  Business Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-gray-200 mt-1 w-full border-0 outline-0 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border-0 bg-gray-200 outline-0 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full border-0 bg-gray-200 outline-0 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Repeat Password
                </label>
                <input
                  type="password"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  className="mt-1 w-full border-0 bg-gray-200 outline-0 rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="text-[#223962] mt-6">
          <label className="block text-sm font-medium">About Me</label>
          <textarea
            name="about"
            rows="3"
            value={formData.about}
            onChange={handleChange}
            className="mt-1 w-full md:w-[77%] md:h-[3rem] h-[5rem] border-0 bg-gray-200 outline-0 rounded-md p-2"
          />
        </div>

        {/* Update Button */}
        <div className="text-right mt-6">
          <button className="px-6 py-2 bg-[#223962] text-white rounded-lg shadow hover:bg-blue-900">
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
}
