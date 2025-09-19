import React, { useEffect } from "react";
import { useState } from "react";
import { User, Mail, Phone } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

export default function Accounts() {
  const dispatch = useDispatch();

  const { user, loading } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentPassword: "******************",
    newPassword: "******************",
  });
  //+44 (123) 456-9878

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    } else {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user, dispatch])

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
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={`${formData.firstName} ${formData.lastName}`}
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
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
