import React from "react";
import { useState } from "react";
import { User, Mail, Phone, Lock, Crown, Check } from "lucide-react";

export default function Accounts() {
  const [formData, setFormData] = useState({
    fullName: "Asenkrekmanov",
    email: "azkrekmanov@gmail.com",
    phone: "+44 (123) 456-9878",
    currentPassword: "******************",
    newPassword: "******************",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 w-full bg-gray-50 ">
        <div className="md:w-1/3 p-6 ">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Personal Info
          </h1>
          <p className="text-gray-600">
            You can change your personal information settings here.
          </p>
        </div>

        <div className="bg-white border border-gray-300 p-6 shadow rounded-md md:w-2/3 ">
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Business Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="flex items-center px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 min-w-[80px]">
                  <div className="w-5 h-4 bg-blue-600 rounded-sm flex items-center justify-center mr-2">
                    <div className="w-3 h-2 bg-white rounded-sm relative">
                      <div
                        className="absolute inset-0 bg-red-600"
                        style={{
                          clipPath:
                            "polygon(0 0, 40% 0, 50% 50%, 40% 100%, 0 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
